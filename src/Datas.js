let XAxisData = [
    { "month": "Jan", "Sale": 12_000 },
    { "month": "jan", "Sale": 120_000 },
    { "month": "jan", "Sale": 150_000 },
    { "month": "jan", "Sale": 12_000 },
    { "month": "jan", "Sale": 12_000 },
    { "month": "jan", "Sale": 98_000 },
    { "month": "jan", "Sale": 12_000 },
    { "month": "jan", "Sale": 85_000 },
    { "month": "jan", "Sale": 1_000 },
    { "month": "jan", "Sale": 50_000 },
    { "month": "jan", "Sale": 50_000 },
    { "month": "jan", "Sale": 18_000 },
]



let User = [


    {
        id: 1, name: "shahrooz ", job: "react  developer",
    },
    {
        id: 2, name: "reza fatemi  ", job: "laravel  ",
    },
    {
        id: 3, name: "saeed ahmadi ", job: "seo  Eng ",
    },
    {
        id: 4, name: "arezo  moghdam   ", job: "Next  js  ",
    },
]


let TransactionData = [


    {
        id: 1, name: "shahrooz karami  ",
         data: "2022/2/31",
        img  :  "Imgs/profile.png" ,  
        amount  :  20_000 ,
        status   :    "Approved"
    }  ,  
    {
        id: 1, name: "reza fatemi  ",
         data: "2012/2/31",
        img  :  "Imgs/profile.png" ,  
        amount  :  120_000 ,
        status   :    "Decline"
    }  ,  
    {
        id: 1, name: "saeed ahmadi  ",
         data: "2027/2/31",
        img  :  "Imgs/profile.png" ,  
        amount  :  1_000 ,
        status   :    "Approved"
    }  ,  
    {
        id: 1, name: " fatemeh  davoodi  ",
         data: "2002/2/31",
        img  :  "Imgs/profile.png" ,  
        amount  :  1_000_000 ,
        status   :    "Decline"
    }  ,  
]

let  listUser  =  [

    {
         id  :  1 ,  name :  "shahrooz karami "  ,  avator :  "Imgs/profile.png"  ,  status  :  "active "  ,  transactions :  12_000
    } ,  
    {
         id  :  2 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "disable "  ,  transactions :  12_000
    } ,  
    {
         id  :  3 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "active "  ,  transactions :  12_000
    } ,  
    {
         id  :  4 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "disable "  ,  transactions :  12_000
    } ,  
    {
         id  :  5 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "active "  ,  transactions :  12_000
    } ,  
    {
         id  :  6 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "active "  ,  transactions :  12_000
    } ,  
    {
         id  :  7 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "disable "  ,  transactions :  12_000
    } ,  
    {
         id  :  8 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "active "  ,  transactions :  12_000
    } ,  
    {
         id  :  9 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "disable "  ,  transactions :  12_000
    } ,  
    {
         id  :  10,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "active "  ,  transactions :  12_000
    } ,  
    {
         id  :  11 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "active "  ,  transactions :  12_000
    } ,  
    {
         id  :  12 ,  name :  "shahrooz karami "  ,  avator :  "/Imgs/profile.png"  ,  status  :  "disable "  ,  transactions :  12_000
    } ,  
]


let  listProducts =  [

    {
        id :  1  ,  title  :  "Iphone12"  ,   price  :  50_000_000  ,  poster :  "Imgs/profile.png"
    }  ,  
    {
        id :  2 ,  title  :  "samsung S23"  ,   price  :  40_000_000  ,  poster :  "Imgs/profile.png"
    }  ,  
    {
        id :  3  ,  title  :  "samsung A12"  ,   price  :  10_000_000  ,  poster :  "Imgs/profile.png"
    }  ,  
    {
        id :  4  ,  title  :  "Iphone15  Pro Max"  ,   price  :  100_000_000  ,  poster :  "Imgs/profile.png"
    }  ,  
    {
        id :  5  ,  title  :  "honer"  ,   price  :  8_000_000  ,  poster :  "Imgs/profile.png"
    }  ,  
    {
        id :  6  ,  title  :  "Iphone12"  ,   price  :  50_000_000  ,  poster :  "Imgs/profile.png"
    }  ,  
    {
        id :    7  ,  title  :  "Iphone12"  ,   price  :  50_000_000  ,  poster :  "Imgs/profile.png"
    }  ,  
]


let  listProductsChart  =  [
    {month  : "Jun"  ,  Sale :  5000}  , 
    {month  : "Feb"  ,  Sale :  1_000}  , 
    {month  : "Jun"  ,  Sale :  5_000}  , 
    {month  : "Jun"  ,  Sale :  8_000}  , 
    {month  : "Jun"  ,  Sale :  7_000}  , 
]


let  questions   = [


    {
        id :  1  ,  title  :  "What  is BankID  ?  "
        ,  info  :  "love js fo  all  the Time  im  shahrooz and the best developer in Iran  ,,,  "
    } , 
    {
        id : 2  ,  title  :  "What  is BankID  ?  "
        ,  info  :  "love js fo  all  the Time  im  shahrooz and the best developer in Iran  ,,,  "
    } , 
    {
        id :  3  ,  title  :  "What  is BankID  ?  "
        ,  info  :  "love js fo  all  the Time  im  shahrooz and the best developer in Iran  ,,,  "
    } , 
    {
        id :  4  ,  title  :  "What  is BankID  ?  "
        ,  info  :  "love js fo  all  the Time  im  shahrooz and the best developer in Iran  ,,,  "
    } , 
    {
        id :  5  ,  title  :  "What  is BankID  ?  "
        ,  info  :  "love js fo  all  the Time  im  shahrooz and the best developer in Iran  ,,,  "
    } , 
]

export default XAxisData  
export { User  ,  TransactionData   ,  listUser  ,  listProducts  ,  listProductsChart   ,  questions }