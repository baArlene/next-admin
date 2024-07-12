import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = async ({params}) => {

    const {id} = params;
    const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={product.img || '/noproduct.jpg'} alt='' fill />
            </div>
            {product.title}
        </div>
        <div className={styles.formContainer}>
            <form action={updateProduct} className={styles.form}>
                <input type="hidden" name="id" value={product.id} />
            <label>Title</label>
            <input type="text" name='title' placeholder={product.title} />
            <label>Price</label>
            <input type="number" name='price' placeholder={product.price} />
            <label>Stock</label>
            <input type="number" name='stock' placeholder={product.stock}/>
            <label>Color</label>
            <input type="text" name='color' placeholder={product.color} />
            <label>Size</label>
            <input type="text" name='size' placeholder={product.size} />
            <label>Category</label>
            <select name="Cate" id="cate">
            <option value="general">Choose a Category</option>
                <option value="phone">Phone</option>
                <option value="desktop">Desktop</option>
                <option value="laptop">Laptop</option>
            </select>
            <label>Description</label>
            <textarea name="desc" id="desc" rows={10} placeholder='Description'></textarea>
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage