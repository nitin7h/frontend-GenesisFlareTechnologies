export default function FooterPage() {
  return (
    <footer className="py-8 text-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 transition-colors duration-300">
      © {new Date().getFullYear()} Growly. All rights reserved.
    </footer>
  );
}
