import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
   
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/signin">
                                <a>signin</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/signup">
                                <a>signup</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Index;