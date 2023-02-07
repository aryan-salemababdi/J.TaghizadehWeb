import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/components/template/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <HomePage />
    </div>
  )
}
