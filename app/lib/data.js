import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i');

    {/* ITEMS_PER_PAGE is the number of items to be shown per page. #Pagination */}
    const ITEMS_PER_PAGE = 3;
    const start = (page - 1) * ITEMS_PER_PAGE;

    try {
        connectToDB();
        
        const count = await User.find({username: {$regex: regex}}).count();

        const users = await User.find({username: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(start);
        
        return {count, users};
        
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch users!');
    }
}

export const fetchUser = async (id) => {
    
    try {
        connectToDB();
        
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch user!');
    }
}




export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i');

    {/* ITEMS_PER_PAGE is the number of items to be shown per page. #Pagination */}
    const ITEMS_PER_PAGE = 3;
    const start = (page - 1) * ITEMS_PER_PAGE;

    try {
        connectToDB();
        
        const count = await Product.find({title: {$regex: regex}}).count();

        const products = await Product.find({title: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(start);
        
        return {count, products};
        
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch products!');
    }
}

export const fetchProduct = async (id) => {
    
    try {
        connectToDB();
        
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch product!');
    }
}
