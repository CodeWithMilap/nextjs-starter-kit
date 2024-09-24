import Link from 'next/link';

export default function Home() {
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center p-6 sm:p-10">
			<header className="text-center">
				<h1 className="text-4xl font-extrabold sm:text-5xl">
					Welcome to the Next.js Starter Kit!
				</h1>
				<p className="mx-auto mt-4 max-w-lg text-lg sm:text-xl">
					This template is pre-configured with linting, formatting, and Tailwind CSS for
					your Next.js projects.
				</p>
			</header>

			<main className="mt-8 text-center">
				<section className="mb-12">
					<h2 className="text-2xl font-semibold sm:text-3xl">Get Started</h2>
					<p className="mx-auto mt-2 max-w-md text-base sm:text-lg">
						Clone this repository and run:
					</p>
					<div className="mt-4 inline-block rounded-lg bg-gray-100 px-5 py-3 text-sm text-black sm:text-base">
						<code className="font-mono">npm install</code> <br />
						<code className="font-mono">npm run dev</code>
					</div>
				</section>

				<footer className="mt-12 space-y-4">
					<p className="text-lg sm:text-xl">
						Created by{' '}
						<Link
							href="https://github.com/CodeWithMilap"
							className="font-medium text-blue-600 hover:text-blue-800"
						>
							Milap Dave
						</Link>
					</p>
					<p className="">Feel free to reach out for any questions or contributions!</p>
				</footer>
			</main>
		</div>
	);
}
