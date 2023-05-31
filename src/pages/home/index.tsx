import styles from './home.module.css';
import {BiSearch} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export function Home(){
    return(
        <main className={styles.container}>
            <form className={styles.form}>
                <input placeholder='Digite o simbolo da moeda: BTC...' />
                <button type='submit'>
                    <BiSearch size={30} color="#FFF"> </BiSearch>
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Moeda</th>
                        <th>Valor mercado</th>
                        <th>Preço</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.tdlabel} data-Label="Moeda">
                            <Link  className={styles.Link} to="/datail'btc">
                                <span>Bitcoin</span> | BTC
                            </Link>
                        </td>
                        <td className={styles.tdlabel} data-Label="Mercado">R$ 1,00</td>
                        <td className={styles.tdlabel} data-Label="Preco">R$ 1,00</td>
                        <td className={styles.tdProfit} data-Label="Volume"> <span>-5.3</span></td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}