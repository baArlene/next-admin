import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import { searchParams } from "next/navigation";
import { fetchProducts } from "@/app/lib/data";

const ProductsPage = async({searchParams}) => {

  const q = searchParams?.q || "";

  const page = searchParams?.page || 1;


  const {count, products} = await fetchProducts(q, page);


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
          <tr key={product.id}>
            <td>
              <div className={styles.product}>
                <Image
                  src={product.img || "/noproduct.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                {product.title}
              </div>
            </td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.createdAt?.toString().slice(4, 16)}</td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} page={page} />
    </div>
  );
};

export default ProductsPage;
