import styles from '../styles/styles.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.mainContainer}>{children}</div>
    )
}

export default Layout