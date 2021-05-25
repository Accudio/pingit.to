import styles from 'styles/components/sidebar/credits.module.scss'

export default function Credits() {
  return (
    <footer className={`${styles.wrap} text-300`}>
      <div>Copyright 2021</div>
      <div>Made by <a href="https://www.alistairshepherd.uk/">Alistair Shepherd</a></div>
    </footer>
  )
}
