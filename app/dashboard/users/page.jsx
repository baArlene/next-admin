import Search from '@/app/ui/dashboard/search/Search'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'


const UsersPage = () => {
  return (
    <div className={styles.containter}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href='/dashboard/users/add'>
        <button className={styles.addButton}>Add New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}><Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage} />
              John Doe</div>
            </td>
            <td>johnd@example.com</td>
            <td>17.09.2023</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
              <Link href='/dashboard/users/edit/1'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}><Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage} />
              Jane Doe</div>
            </td>
            <td>janed@example.com</td>
            <td>21.09.2023</td>
            <td>Client</td>
            <td>passive</td>
            <td>
              <div className={styles.buttons}>
              <Link href='/dashboard/users/edit/1'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage