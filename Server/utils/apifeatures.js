export default class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                  name: {
                      $regex: this.queryStr.keyword,
                      $options: 'i', // to get more line regex
                  },
              }
            : {};
        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };

        //   Removing some fields for category
        const removeFields = ['keyword', 'page', 'limit'];

        removeFields.forEach((key) => {
            if (key in queryCopy) {
                delete queryCopy[key];
            }
        });

        // Filter For Price and Rating
        let queryStr = JSON.stringify(queryCopy);
        // console.log(queryStr); => {"category":"laptop","price":{"gt":"1200"}}

        // Regular expression normally was placed in / .../
        // \bWORD or WORD\b => find "WORD" at begin or end, "WORD IS NOTHING" OR "NOTHING IS WORD"
        // flag g: Global search. ex: price[gt]: 1200 => price: {gt: 1200}
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        // console.log(queryStr); => {"category":"laptop","price":{"$gt":"1200"}}

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}
