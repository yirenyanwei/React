import styles from './index.less';
import {Redirect} from 'umi'
//入口
export default function IndexPage() {
  return (
    <div>
      <Redirect to='/film'></Redirect>
      {/* <h1 className={styles.title}>Page index</h1> */}
    </div>
  );
}
