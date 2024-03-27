import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
	const YourComponent = () => (
		<Image
			src='/images/family.jpeg' // Route of the image file
			height={144} // Desired size with correct aspect ratio
			width={144} // Desired size with correct aspect ratio
			alt='Your Name'
		/>
	);
	return (
		<Layout>
			<Head>
				<title>Andrew McClelland</title>
			</Head>
			<h1>First Post</h1>
			<img src='/images/family.jpeg' alt='Your Name' />
			<h2>
				<Link href='/'>Back to home</Link>
			</h2>
		</Layout>
	);
}
