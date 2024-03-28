import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<h3 className={homeStyles.title}>
				My <Link href='/posts/first-post'>blog posts!</Link>
			</h3>
			<section className={utilStyles.headingMd}>
				<p>Hi,</p>
				<p>I'm a Graduate Software Developer from Northern Ireland.</p>
				<p>
					Go{' '}
					<a
						href='https://github.com/aejmcclelland'
						target='_blank'
						rel='noreferrer'>
						{' '}
						here
					</a>{' '}
					to see my work on Github{' '}
				</p>
			</section>
		</Layout>
	);
}
