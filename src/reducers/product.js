

var initialState=[
    {
        id:1,
        name: 'IPHONE 7PLUS',
        image:'https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-xanh-duong-new-600x600-200x200.jpg',
        description:'',
        price: 500,
        invertory: 10, // số sản phẩm còn lại trong kho,
        rating: 3
    },
    {
        id:2,
        name: 'SAMSUNG GALAXY',
        image:'https://www.xtmobile.vn/vnt_upload/product/07_2019/thumbs/(600x600)_crop_600_samsung_galaxy_a71_xanh.jpg',
        description:'',
        price: 600,
        invertory: 11, // số sản phẩm còn lại trong kho
        rating: 4
    },
    {
        id:3,
        name: 'NOKIA CỤC GẠCH',
        image:'https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-silver-new-600x600.jpg',
        description:'',
        price: 700,
        invertory: 12, // số sản phẩm còn lại trong kho
        rating: 5
    }
];

const product = (state= initialState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default product;