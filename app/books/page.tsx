import Image from "next/image"
import Link from "next/link"

export default function Books() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-pink-50">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-48 mb-8 md:mb-0">
          <div className="mb-6">
            <Image
              src="/images/new-leaf-logo.png"
              alt="Marie and Michael Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>

          <nav className="space-y-2">
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Home
            </Link>
            <Link href="/books" className="block py-2 px-4 bg-gray-100 text-gray-900 rounded">
              Books
            </Link>
            <Link href="/stack" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Stack
            </Link>
            <Link href="/ama" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              AMA
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <h1 className="text-3xl font-serif mb-4">Books</h1>

          <p className="text-gray-700 mb-8">
            Books we've read over time, mostly in reverse chronological order. Bold indicates favorites.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">Author</th>
                  <th className="text-left py-2 font-medium text-gray-700">Title</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Giraud</td>
                  <td className="py-3 text-gray-700">Vivre vite</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Eco</td>
                  <td className="py-3 text-gray-700">Reconnaître le faux</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Tocqueville</td>
                  <td className="py-3 text-gray-700">Tyrannie de la majorité</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cosey</td>
                  <td className="py-3 text-gray-700">Orchidea</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Tuil</td>
                  <td className="py-3 text-gray-700">Les choses humaines</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Tomine</td>
                  <td className="py-3 text-gray-700">Killing and Dying</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Kalanithi</td>
                  <td className="py-3 text-gray-700">When Breath Becomes Air</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Gurri</td>
                  <td className="py-3 text-gray-700">The Revolt of The Public</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Eco</td>
                  <td className="py-3 text-gray-700 font-bold">The Book of Legendary Lands</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Vargas Llosa</td>
                  <td className="py-3 text-gray-700">Tiempos Recios (Harsh Times)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Towles</td>
                  <td className="py-3 text-gray-700 font-bold">A Gentleman in Moscow</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cosey</td>
                  <td className="py-3 text-gray-700">Saigon-Hanoi</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Dupont-Monod</td>
                  <td className="py-3 text-gray-700">S'adapter</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Dubois</td>
                  <td className="py-3 text-gray-700">Les gens n'habitent pas le monde de la même façon</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Hegland</td>
                  <td className="py-3 text-gray-700">The Future of Text</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cosey</td>
                  <td className="py-3 text-gray-700">Le voyage en Italie</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">George Pólya</td>
                  <td className="py-3 text-gray-700">How to Solve It</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Waldrop</td>
                  <td className="py-3 text-gray-700 font-bold">The Dream Machine</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Richardson, Huynh, Sotto</td>
                  <td className="py-3 text-gray-700">Get Together</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ishiguro</td>
                  <td className="py-3 text-gray-700">Klara and the Sun</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ruffin</td>
                  <td className="py-3 text-gray-700">Le collier rouge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Bloch</td>
                  <td className="py-3 text-gray-700">L'étrange défaite</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Rochette</td>
                  <td className="py-3 text-gray-700">Ailefroide</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Balibar</td>
                  <td className="py-3 text-gray-700">Marie Curie : Femme savante ou Sainte Vierge de la science ?</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Weiner</td>
                  <td className="py-3 text-gray-700">Time, Love, Memory</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Eghbal</td>
                  <td className="py-3 text-gray-700">Working in Public</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Le Tellier</td>
                  <td className="py-3 text-gray-700">L'anomalie</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cholet</td>
                  <td className="py-3 text-gray-700">Sorcières</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Butor</td>
                  <td className="py-3 text-gray-700">La modification</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Sagan</td>
                  <td className="py-3 text-gray-700">Les bleus à l'âme (Scars on the Soul)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Perec</td>
                  <td className="py-3 text-gray-700">Les choses (Things)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Sagan</td>
                  <td className="py-3 text-gray-700">Avec mon meilleur souvenir</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Besson</td>
                  <td className="py-3 text-gray-700">Un garçon d'Italie</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Coelho</td>
                  <td className="py-3 text-gray-700">Warrior of the Light: A Manual</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Almendros</td>
                  <td className="py-3 text-gray-700">Un été</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Solzhenitsyn</td>
                  <td className="py-3 text-gray-700">The Gulag Archipelago</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Vargas Llosa</td>
                  <td className="py-3 text-gray-700">Travesuras de la niña mala (The Bad Girl)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beigbeder</td>
                  <td className="py-3 text-gray-700">😊</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Goethe</td>
                  <td className="py-3 text-gray-700">Faust</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Gleick</td>
                  <td className="py-3 text-gray-700">Genius</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ellis</td>
                  <td className="py-3 text-gray-700">White</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Brochard-Castex, Grolleau</td>
                  <td className="py-3 text-gray-700">Grand Océan</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Compagnon</td>
                  <td className="py-3 text-gray-700">Un été avec Montaigne</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Tesson</td>
                  <td className="py-3 text-gray-700">Un été avec Homère</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Boucheron</td>
                  <td className="py-3 text-gray-700">Un été avec Machiavel</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Levi</td>
                  <td className="py-3 text-gray-700">The Periodic Table</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Malraux</td>
                  <td className="py-3 text-gray-700">La condition humaine (Man's Fate)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Wiesel</td>
                  <td className="py-3 text-gray-700">La nuit</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ruffin</td>
                  <td className="py-3 text-gray-700">Rouge Brésil</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Dicker</td>
                  <td className="py-3 text-gray-700 font-bold">La vérité sur l'affaire Harry Québert</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Camus</td>
                  <td className="py-3 text-gray-700">Le premier homme (The First Man)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Bartocci</td>
                  <td className="py-3 text-gray-700">Mathematical Lives</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Vuillard</td>
                  <td className="py-3 text-gray-700">La guerre des pauvres</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Vargas Llosa</td>
                  <td className="py-3 text-gray-700">La fiesta del chivo (The Feast of the Goat)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Sarraute</td>
                  <td className="py-3 text-gray-700">Tropismes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Villani, Cartier, D'hombres, Heinzmann</td>
                  <td className="py-3 text-gray-700">Conversations sur les mathématiques</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Taniguchi</td>
                  <td className="py-3 text-gray-700">Le gourmet solitaire</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Houellebecq</td>
                  <td className="py-3 text-gray-700">Sérotonine</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Villani</td>
                  <td className="py-3 text-gray-700">Les mathématiques sont la poésie des sciences</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Bulgakov</td>
                  <td className="py-3 text-gray-700">Heart of a Dog</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Lagerkvist</td>
                  <td className="py-3 text-gray-700">Barrabas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Larcenet</td>
                  <td className="py-3 text-gray-700">Le rapport Brodeck</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Capote</td>
                  <td className="py-3 text-gray-700">In Cold Blood</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Minsky</td>
                  <td className="py-3 text-gray-700">The Society of Mind</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Kissinger</td>
                  <td className="py-3 text-gray-700">World Order</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Chauveau</td>
                  <td className="py-3 text-gray-700">Fragonard: l'invention du bonheur</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Larcenet</td>
                  <td className="py-3 text-gray-700 font-bold">Blast</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Laloux</td>
                  <td className="py-3 text-gray-700">Reinventing Organizations</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Wolff</td>
                  <td className="py-3 text-gray-700">Fire and Fury</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Sapin</td>
                  <td className="py-3 text-gray-700 font-bold">Gérard</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Valiant</td>
                  <td className="py-3 text-gray-700">Probably Approximately Correct</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Bataille</td>
                  <td className="py-3 text-gray-700">Ma mère</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Van Dongen</td>
                  <td className="py-3 text-gray-700">La vie de Rembrandt</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ferrante</td>
                  <td className="py-3 text-gray-700">L'amie prodigieuse</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Mukherjee</td>
                  <td className="py-3 text-gray-700">The Gene</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">McCloud</td>
                  <td className="py-3 text-gray-700">Understanding Comics</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Stephenson</td>
                  <td className="py-3 text-gray-700">Seveneves</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Lane</td>
                  <td className="py-3 text-gray-700">Life Ascending</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Stone</td>
                  <td className="py-3 text-gray-700">The Everything Store</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Christensen</td>
                  <td className="py-3 text-gray-700">The Innovator's Dilemma</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Kuhn</td>
                  <td className="py-3 text-gray-700">The Structure of Scientific Revolutions</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Slee</td>
                  <td className="py-3 text-gray-700">What's Yours is Mine</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Bringhurst</td>
                  <td className="py-3 text-gray-700">Elements of Typographic Style</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Dreyfus</td>
                  <td className="py-3 text-gray-700">What Computers Still Can't Do</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Kocienda</td>
                  <td className="py-3 text-gray-700">Creative Selection</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Rheingold</td>
                  <td className="py-3 text-gray-700">Tools for Thought</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Norman</td>
                  <td className="py-3 text-gray-700">The Design of Everyday Things</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Lupton</td>
                  <td className="py-3 text-gray-700">Thinking with Type</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Wu</td>
                  <td className="py-3 text-gray-700">The Attention Merchants</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Rosling</td>
                  <td className="py-3 text-gray-700">Factfulness</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Isaacson</td>
                  <td className="py-3 text-gray-700">Steve Jobs</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Jablonka</td>
                  <td className="py-3 text-gray-700">Camping-car</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Boulgakov</td>
                  <td className="py-3 text-gray-700">The Master and Margarita</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Tournier</td>
                  <td className="py-3 text-gray-700">Vendredi ou les limbes du Pacifique</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Strogatz</td>
                  <td className="py-3 text-gray-700">The Joy of X</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Nagel</td>
                  <td className="py-3 text-gray-700">Le théorème de Gödel</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Rousseau</td>
                  <td className="py-3 text-gray-700">Le contrat social (The Social Contract)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Case</td>
                  <td className="py-3 text-gray-700">Calm Technology</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Kessel</td>
                  <td className="py-3 text-gray-700">Les mains du miracle</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Perrin</td>
                  <td className="py-3 text-gray-700">Les atomes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">De Gaulle</td>
                  <td className="py-3 text-gray-700">Mémoires</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Eyal</td>
                  <td className="py-3 text-gray-700">Hooked</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Marquez</td>
                  <td className="py-3 text-gray-700">One Hundred Years of Solitude</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Grove</td>
                  <td className="py-3 text-gray-700">Only the Paranoid Survive</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Grove</td>
                  <td className="py-3 text-gray-700">High Output Management</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Feynman</td>
                  <td className="py-3 text-gray-700">Lectures on Computation</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">François-Poncet</td>
                  <td className="py-3 text-gray-700">Souvenirs d'une ambassade à Berlin</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Carreyrou</td>
                  <td className="py-3 text-gray-700">Bad Blood</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Taniguchi</td>
                  <td className="py-3 text-gray-700">Venise</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Arasse</td>
                  <td className="py-3 text-gray-700 font-bold">Histoire de peintures</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">HG Wells</td>
                  <td className="py-3 text-gray-700">The War of The Worlds</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Foucault</td>
                  <td className="py-3 text-gray-700 font-bold">Surveiller et punir</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Schrödinger</td>
                  <td className="py-3 text-gray-700">My View of the World</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Gessen</td>
                  <td className="py-3 text-gray-700">La légende de Grigory Perelman</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Dehaene</td>
                  <td className="py-3 text-gray-700">Le code de la conscience</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Kumar</td>
                  <td className="py-3 text-gray-700">Le Grand Roman de la Physique Quantique</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Bird, Sherwin</td>
                  <td className="py-3 text-gray-700 font-bold">Oppenheimer, American Prometheus</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Baricco</td>
                  <td className="py-3 text-gray-700">Novocento : Pianiste</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Yourcenar</td>
                  <td className="py-3 text-gray-700">Feux</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Brecht</td>
                  <td className="py-3 text-gray-700">La résistible ascension d'Arturo Ui</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Pais</td>
                  <td className="py-3 text-gray-700">Subtle Is the Lord</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Crumb</td>
                  <td className="py-3 text-gray-700">The Book of Genesis</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Stora, Vassant</td>
                  <td className="py-3 text-gray-700">La guerre d'Algérie</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Yourcenar</td>
                  <td className="py-3 text-gray-700">Mémoires d'Hadrien</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Arago</td>
                  <td className="py-3 text-gray-700">Gaspard Monge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">De Pongerville</td>
                  <td className="py-3 text-gray-700">Gaspard Monge et l'expédition en Égypte</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Carr</td>
                  <td className="py-3 text-gray-700">The Glass Cage</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Carr</td>
                  <td className="py-3 text-gray-700">The Shallows</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Taniguchi</td>
                  <td className="py-3 text-gray-700">La forêt millénaire</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Gertner</td>
                  <td className="py-3 text-gray-700">The Idea Factory</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Dyson</td>
                  <td className="py-3 text-gray-700">The Scientist As Rebel</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Taniguchi</td>
                  <td className="py-3 text-gray-700">Le livre du vent</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Torres-Blandina</td>
                  <td className="py-3 text-gray-700">Le Japon n'existe pas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Montaigne</td>
                  <td className="py-3 text-gray-700">Dans la combi de Thomas Pesquet</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Blanquer</td>
                  <td className="py-3 text-gray-700">L'école de demain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Tey</td>
                  <td className="py-3 text-gray-700">La fille du temps</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Pinker</td>
                  <td className="py-3 text-gray-700">How the Mind Works</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Vuillard</td>
                  <td className="py-3 text-gray-700">L'ordre du jour</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Dyson</td>
                  <td className="py-3 text-gray-700">La vie dans l'univers</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cosey</td>
                  <td className="py-3 text-gray-700">À la recherche de Peter Pan</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Monod</td>
                  <td className="py-3 text-gray-700">Le hasard et la nécessité (Chance and Necessity)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Apollinaire</td>
                  <td className="py-3 text-gray-700">Alcools</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Einstein</td>
                  <td className="py-3 text-gray-700">Conceptions scientifiques</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Voltaire</td>
                  <td className="py-3 text-gray-700">Candide</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Grass</td>
                  <td className="py-3 text-gray-700">Cat and Mouse</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">O'Neil</td>
                  <td className="py-3 text-gray-700">Tesla, Prodigal Genius</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Pratt</td>
                  <td className="py-3 text-gray-700">Corto Maltèse, Ethiopiques</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Asimov</td>
                  <td className="py-3 text-gray-700">Foundation and Empire</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Conan Doyle</td>
                  <td className="py-3 text-gray-700">The Hound of the Baskervilles</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Russell</td>
                  <td className="py-3 text-gray-700">Mysticism and Logic</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Feynman</td>
                  <td className="py-3 text-gray-700">QED</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Feynman</td>
                  <td className="py-3 text-gray-700">The Meaning of It All</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Feynman</td>
                  <td className="py-3 text-gray-700">Lecture Notes in Physics</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Hockney</td>
                  <td className="py-3 text-gray-700">Secret Knowledge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Eccles</td>
                  <td className="py-3 text-gray-700">Évolution du cerveau et création de la conscience</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Hemingway</td>
                  <td className="py-3 text-gray-700">The Garden of Eden</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Rilke</td>
                  <td className="py-3 text-gray-700">Letters to a Young Poet</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Racine</td>
                  <td className="py-3 text-gray-700">Phèdre</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Sartre</td>
                  <td className="py-3 text-gray-700">L'existentialisme est un humanisme</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Kierkegaard</td>
                  <td className="py-3 text-gray-700">Diary of a Seducer</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ruelle</td>
                  <td className="py-3 text-gray-700">L'étrange beauté des mathématiques</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ingels</td>
                  <td className="py-3 text-gray-700">Yes is More</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Le Corbusier</td>
                  <td className="py-3 text-gray-700">Vers une architecture</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Platon</td>
                  <td className="py-3 text-gray-700">Phèdre</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Borges</td>
                  <td className="py-3 text-gray-700">Fictions</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Platon</td>
                  <td className="py-3 text-gray-700">Apologie de Socrate</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Matazo</td>
                  <td className="py-3 text-gray-700">Déluge</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Coetzee</td>
                  <td className="py-3 text-gray-700">Waiting for the Barbarians</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Houellebecq</td>
                  <td className="py-3 text-gray-700">Extension du domaine de la lutte (Whatever)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Houellebecq</td>
                  <td className="py-3 text-gray-700 font-bold">
                    La carte et le territoire (The Map and the Territory)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Voltaire</td>
                  <td className="py-3 text-gray-700">Micromégas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beigbeder</td>
                  <td className="py-3 text-gray-700">L'égoïste romantique</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Balzac</td>
                  <td className="py-3 text-gray-700">La peau de chagrin</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Huxley</td>
                  <td className="py-3 text-gray-700">Brave New World</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Ionesco</td>
                  <td className="py-3 text-gray-700">La cantatrice chauve</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Schopenhauer</td>
                  <td className="py-3 text-gray-700">The Art of Being Right</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Fitzgerald</td>
                  <td className="py-3 text-gray-700 font-bold">The Great Gatsby</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Balzac</td>
                  <td className="py-3 text-gray-700">Le colonel Chabert</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Conrad</td>
                  <td className="py-3 text-gray-700">Heart of Darkness</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Hemingway</td>
                  <td className="py-3 text-gray-700">The Old Man and the Sea</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beigbeder</td>
                  <td className="py-3 text-gray-700">Un roman français</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Mauvigner</td>
                  <td className="py-3 text-gray-700">Des hommes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Roth</td>
                  <td className="py-3 text-gray-700">The Human Stain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Besson</td>
                  <td className="py-3 text-gray-700">Se résoudre aux adieux</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Balzac</td>
                  <td className="py-3 text-gray-700 font-bold">Le père Goriot</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Duras</td>
                  <td className="py-3 text-gray-700">L'amant</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cocteau</td>
                  <td className="py-3 text-gray-700">Thomas l'imposteur</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Apollinaire</td>
                  <td className="py-3 text-gray-700">L'esprit nouveau et les poètes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Coetzee</td>
                  <td className="py-3 text-gray-700">Disgrace</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cocteau</td>
                  <td className="py-3 text-gray-700">Les mariés de la Tour Eiffel</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Cocteau</td>
                  <td className="py-3 text-gray-700 font-bold">Antigone</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Camus</td>
                  <td className="py-3 text-gray-700">La peste</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Roth</td>
                  <td className="py-3 text-gray-700">Indignation</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Rilke</td>
                  <td className="py-3 text-gray-700">Rodin</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Celine</td>
                  <td className="py-3 text-gray-700">Voyage au bout de la nuit</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Plath</td>
                  <td className="py-3 text-gray-700">The Bell Jar</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Bukowski</td>
                  <td className="py-3 text-gray-700">Ham On Rye</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Palahniuk</td>
                  <td className="py-3 text-gray-700">Invisible Monsters</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Roth</td>
                  <td className="py-3 text-gray-700">The Plot Against America</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Zweig</td>
                  <td className="py-3 text-gray-700">La confusion des sentiments</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beigbeder</td>
                  <td className="py-3 text-gray-700">L'amour dure trois ans</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beigbeder</td>
                  <td className="py-3 text-gray-700">Nouvelles sous ecstasy</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Houellebecq</td>
                  <td className="py-3 text-gray-700">Interventions 2</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Solzhenitsyn</td>
                  <td className="py-3 text-gray-700">One Day in the Life of Ivan Denisovich</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beigbeder</td>
                  <td className="py-3 text-gray-700">Vacances dans le coma</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Shakespeare</td>
                  <td className="py-3 text-gray-700">Macbeth</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Koltes</td>
                  <td className="py-3 text-gray-700">Coco</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Gary</td>
                  <td className="py-3 text-gray-700">La vie devant soi</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Machiavel</td>
                  <td className="py-3 text-gray-700">The Prince</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Koltes</td>
                  <td className="py-3 text-gray-700 font-bold">Roberto Zucco</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Williams</td>
                  <td className="py-3 text-gray-700">Sugar in the Cane</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Williams</td>
                  <td className="py-3 text-gray-700">Cat on a Hot Tin Roof</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cocteau</td>
                  <td className="py-3 text-gray-700">L'aigle à deux têtes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cocteau</td>
                  <td className="py-3 text-gray-700">La machine infernale</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beigbeder</td>
                  <td className="py-3 text-gray-700">Windows on the world</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Van Gogh</td>
                  <td className="py-3 text-gray-700">Letters to Theo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Sophocles</td>
                  <td className="py-3 text-gray-700">Antigone</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Euripides</td>
                  <td className="py-3 text-gray-700">Iphigenia in Aulis</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Checkhov</td>
                  <td className="py-3 text-gray-700 font-bold">The Seagull</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Checkhov</td>
                  <td className="py-3 text-gray-700">Three Sisters</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700 font-bold">Brecht</td>
                  <td className="py-3 text-gray-700 font-bold">The Good Person of Szechwan</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Brecht</td>
                  <td className="py-3 text-gray-700">La vie de Galilée</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Stewart</td>
                  <td className="py-3 text-gray-700">Letters to a Young Mathematician</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Cocteau</td>
                  <td className="py-3 text-gray-700">Les enfants terribles</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Beckett</td>
                  <td className="py-3 text-gray-700">Waiting for Godot</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">Houellebecq</td>
                  <td className="py-3 text-gray-700">Plateforme</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
