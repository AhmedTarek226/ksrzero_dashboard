export interface ExchangingOrdersResponse{
    exchangingOrders:[
        {
            _id:string,
            addressfrom:{
                blockNumber: Number,
                st: String,
                city: String,
                area: String,
            },
            addressto:{
                blockNumber: Number,
                st: String,
                city: String,
                area: String,
            },
            buyerId:string,
            exchangable:boolean,
            exchangeProperties:{
                productId:string,
                productPrice:number,
                profit:number,
                shipping:number,
                status:string,
                paymentmethod:string,
            },
            paymentmethod:string,
            productId:string,
            productPrice:number,
            profit:number,
            sellerId:string,
            shipping:number,
            status:string,
            time:string
        }
    ],
    ordersDetails:[{
        orderBuyerDetails:{
            userName:string,
            phoneNumber:string,
            address:[],
        },
        orderSellerDetails:{
            userName:string,
            phoneNumber:string,
            address:[],
        },
        orderBuyerProductDetails:{
            title:string,
            img:[]
        },
        orderSellerProductDetails:{
            title:string,
            img:[]
        }
    }]
}

