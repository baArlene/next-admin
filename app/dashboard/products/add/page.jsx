'use client';

import { addProduct } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
        <form action={addProduct} className={styles.form}>
            <input type="text" placeholder='title' name='title' required />
            <select name="category" id="category">
                <option value="general">Choose a Category</option>
                <option value="phone">Phone</option>
                <option value="desktop">Desktop</option>
                <option value="laptop">Laptop</option>
            </select>
            <input type="number" placeholder='price' name='price' required/>
            <input type="number" placeholder='stock' name='stock' required/>
            <input type="text" placeholder='color' name='color'/>
            <input type="text" placeholder='size' name='size'/>
            <textarea name="description" id="description" placeholder='Description' rows='16'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage