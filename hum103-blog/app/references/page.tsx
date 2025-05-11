import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function References() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-center">References</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Primary Sources</h2>
              <ul className="space-y-4">
                <li>
                  Al-Masri, M., & Abu-Ghazaleh, N. (2020). AI-Based Translation Tools in Quranic Studies. Journal of
                  Islamic Studies, 31(4), 453-467.
                </li>
                <li>
                  Byler, D. (2006). Xinjiang and the Han: Ethnic separatism and authoritarian rule in China. Asian
                  Ethnicity.
                </li>
                <li>Confucius. (1979). The Analects (D. C. Lau, Trans.). https://antilogicalism.com/</li>
                <li>
                  Kant, I. (1996). Groundwork of the metaphysics of morals (M. Gregor, Trans.). Cambridge University
                  Press. (Original work published 1785)
                </li>
                <li>
                  Lakhani, M., & Khan, H. M. A. (2023). Fighting disinformation in the Palestine conflict: The role of
                  generative AI and Islamic values. Al Misbah Research Journal, 3(4), 1-13.
                  https://doi.org/10.5281/zenodo.
                </li>
                <li>
                  Leibold, J. (2006). Xinjiang and the Han: Ethnic separatism and authoritarian rule in China. Asian
                  Ethnicity.
                </li>
                <li>
                  MacKay, K. (2019). Feminism and feminist ethics. In S. Campbell (Ed.), Introduction to philosophy:
                  Ethics (pp. 64–74). Rebus Community.
                </li>
                <li>
                  Marx, K., & Engels, F. (2002). The Communist Manifesto. Penguin Classics. (Original work published
                  1848)
                </li>
                <li>Mill, J. S. (1863). Utilitarianism. Parker, Son, and Bourn.</li>
                <li>Plato. (2008). Laches (B. Jowett, Trans.). https://www.gutenberg.org/</li>
                <li>Rawls, J. (1971). A theory of justice. Harvard University Press.</li>
                <li>Velasquez, M. (2008). Philosophy: A text with readings (10th ed., pp. 455–463). Wadsworth.</li>
              </ul>

              <h2 className="mt-8">Secondary Sources</h2>
              <ul className="space-y-4">
                <li>Bostrom, N. (2014). Superintelligence: Paths, dangers, strategies. Oxford University Press.</li>
                <li>
                  Floridi, L. (2019). The ethics of artificial intelligence. In The Oxford Handbook of Ethics of AI.
                  Oxford University Press.
                </li>
                <li>
                  Geraci, R. M. (2010). Apocalyptic AI: Visions of heaven in robotics, artificial intelligence, and
                  virtual reality. Oxford University Press.
                </li>
                <li>Tegmark, M. (2017). Life 3.0: Being human in the age of artificial intelligence. Knopf.</li>
              </ul>

              <h2 className="mt-8">Online Resources</h2>
              <ul className="space-y-4">
                <li>AI Ethics Guidelines Global Inventory. (2023). https://inventory.algorithmwatch.org/</li>
                <li>Center for Humane Technology. (2023). https://www.humanetech.com/</li>
                <li>Partnership on AI. (2023). https://partnershiponai.org/</li>
                <li>
                  UNESCO. (2021). Recommendation on the ethics of artificial intelligence.
                  https://en.unesco.org/artificial-intelligence/ethics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
