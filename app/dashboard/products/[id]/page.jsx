import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src='/noproduct.jpg' alt='' fill />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label>Title</label>
            <input type="text" name='title' placeholder='John Doe' />
            <label>Price</label>
            <input type="number" name='price' placeholder='johnd@example.com' />
            <label>Stock</label>
            <input type="number" name='stock' placeholder='23'/>
            <label>Color</label>
            <input type="text" name='color' placeholder='green' />
            <label>Size</label>
            <input type="text" name='size' placeholder='sml' />
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