"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);
	const pathname = usePathname();

	const links = [
		{ href: "#hem", label: "HEM" },
		{ href: "#vigsel", label: "VIGSELN" },
		{ href: "#boende", label: "BOENDE" },
		{ href: "#fredag", label: "FREDAGEN" },
		{ href: "#transport", label: "TRANSPORT" },
		{ href: "#tal", label: "TAL" },
		{ href: "#barn", label: "BARN" },
		{ href: "#gavor", label: "BRÖLLOPSGÅVOR" },
		{ href: "#form", label: "FORMULÄR" },
	];

	useEffect(() => {
		const handlePointerDown = (event: PointerEvent) => {
			if (!menuOpen) {
				return;
			}

			const target = event.target;

			if (
				target instanceof Node &&
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(target)
			) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("pointerdown", handlePointerDown);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
		};
	}, [menuOpen]);

	return (
		<header className="sticky top-4 z-50 opacity-94 shadow-lg rounded-4xl w-full mx-auto mt-4 px-4 md:px-12 bg-background-secondary">
			<div className="container mx-auto py-4 md:py-6">
				<div
					ref={mobileMenuRef}
					className="md:hidden ml-auto"
				>
					<div className="flex items-center justify-end">
						<button
							type="button"
							onClick={() => setMenuOpen((prev) => !prev)}
							className="text-xl text-text-black hover:cursor-pointer"
							aria-expanded={menuOpen}
							aria-controls="mobile-nav"
						>
							{menuOpen ? "Stäng" : "Meny"}
						</button>
					</div>
					{menuOpen && (
						<div
							id="mobile-nav"
							className={`mt-4 origin-top border-t border-text-black/20 pt-4 overflow-hidden transition-all duration-200 ease-out max-h-128  translate-y-0`}
						>
							<nav className="flex flex-col gap-2">
								{links.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={`rounded px-2 py-2 text-text-black hover:underline ${pathname === link.href ? "underline" : ""} `}
										onClick={() => setMenuOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</nav>
						</div>
					)}
				</div>

				<div className="hidden md:flex md:items-center md:justify-center">
					<nav className="flex flex-wrap items-center grow-2 justify-center">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`rounded p-3 mx-2 text-text-black hover:underline ${pathname === link.href ? "underline" : ""}`}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
