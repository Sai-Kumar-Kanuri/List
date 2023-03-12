import { link } from "fs";
import { json } from "stream/consumers";
import styles from "../../styles/lists.module.css";
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { lists: data }
    }
  }

const List = ({lists}) => {
    return (
        <div>
            <h1>My List</h1>
            {lists.map(list => (
                <Link className={styles.single} href={'/list/' + list.id} key={list.id}>

                    <h3>{list.name}</h3>

                </Link>

            ))}
        </div>
    );
}

export default List;