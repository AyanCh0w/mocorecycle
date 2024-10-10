import Link from 'next/link';
import Image from 'next/image';

const MenuBar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-b-3xl shadow-lg">
      <ul className="flex justify-center space-x-8">
        {[
          { href: "/", text: "Home", emoji: "🏠" },
          { href: "/resources", text: "Resources", emoji: "📚" },
          { href: "/quiz", text: "Quiz", emoji: "🧠" },
          { href: "/benefits", text: "Benefits", emoji: "🌿" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-110 inline-block"
            >
              <span className="text-2xl mr-2">{item.emoji}</span>
              <span className="font-bold">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;