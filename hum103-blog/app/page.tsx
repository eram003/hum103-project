import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0727c1b5-b094-4a75-b4c8-282ca78d75bd-2s4BWOsNDC1bOAQltz7Gov0wYfdZcU.jpeg"
            alt="AI and humanity"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            Religion and faith-based inclusivity, science and technology in the era of AI
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-12 font-light max-w-3xl mx-auto">
            Exploring the intersection of technology, faith, and ethics in modern society
          </p>
          <Link
            href="#introduction"
            className="inline-flex items-center bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Explore Research <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-32 px-4 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest font-medium text-gray-500">The Research</span>
          <h2 className="text-5xl font-serif font-bold mt-4 mb-0 tracking-tight">Introduction</h2>
        </div>

        <div className="prose prose-xl max-w-none font-light leading-relaxed">
          <p>
            We live in an era where Artificial Intelligence (AI) is constantly shaping our perspectives, truth, and
            reality which tends to create a sense of deviation from the traditional ethical theories which results in
            ethical dilemmas. The increasing usage of AI showcases how the views of individuals evolve depending on what
            the AI portrays. The intersection of AI and religion represents both an ethical guideline and a source of
            conflict, focusing on the regions or communities which are already burdened by historical and political
            dispute.
          </p>
          <p>
            This blog explores how the concept of AI and religion challenges the principles of ethical theories in
            regard to the Israel and Palestine conflict. In context to the given case study, "Fighting Disinformation in
            the Palestine Conflict: The Role of Generative AI and Islamic Values", this blog will analyze and dive into
            how the implications of AI technologies contrast various ethical ideologies and Islamic principles.
          </p>
          <p>
            The Chinese case of human rights violation of the Uyghur Muslims in Xinjiang is an exemplary example of how
            governments leverage information systems and surveillance technology to dismantle human rights. China has
            employed advanced digital technologies like AI to track the Uyghurs systematically, jail them, suppress them
            and disrobe them of their fundamental rights and cultural heritage, Byler examines. The present case study
            has revealed the devilish potentiality of AI as well as other information systems whenever they are operated
            without ethical attention, highlighting that they can substantiate authoritarianism. But also it has
            impacts. Most of the time disinformation are spread which creates mess and as a result challenges and
            conflicts has to be faced. This blog explores how the concept of AI and religion both benefits and
            challenges the principles of ethical theories in regard to the Chinese Muslims conflict.
          </p>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4689e2aa-0ee5-43a8-b060-9e51d5a9e60a-YiFKjov1VnTZYV0bbXIJ3idmcdp3Gt.jpeg"
                alt="AI and spirituality"
                width={800}
                height={500}
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="text-sm uppercase tracking-widest font-medium text-gray-500">The Team</span>
            <h2 className="text-5xl font-serif font-bold mt-4 mb-0 tracking-tight">Contributors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {contributors.map((contributor, index) => (
              <Link
                key={index}
                href={`/contributors/${contributor.id}`}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-blue-600 transition-colors">
                    {contributor.name}
                  </h3>
                  <p className="text-gray-400 mb-5 text-sm">ID: {contributor.id}</p>
                  <p className="text-gray-600 line-clamp-3 font-light mb-6">{contributor.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read Analysis <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-sm uppercase tracking-widest font-medium text-gray-500">Final Thoughts</span>
            <h2 className="text-5xl font-serif font-bold mt-4 mb-0 tracking-tight">Conclusion</h2>
          </div>

          <div className="prose prose-xl max-w-none font-light leading-relaxed">
            <p>
              When looking into the role of AI in religious context in the case study "Fighting Disinformation in the
              Palestine Conflict: The Role of Generative AI and Islamic Values" it shows how artificial intelligence
              creates opportunities and risks such as getting more knowledge and also the risk including the
              misinformation due to the AI system programming which might have bad consequences. Even though AI has the
              ability to fight against disinformation, it needs to be carefully monitored by ethical theories that looks
              out for both outcomes and values.
            </p>
            <p>
              Moreover, the case of the Uyghur Muslims in China highlights how, if operated outside ethical boundaries,
              AI can easily be used as a tool of exploitation rather than empowerment. In order to silence Uyghur
              voices, the Chinese government deployed surveillance tactics used to control, monitor and punish them.
              This emphasizes the urgent need of AI systems that do not compromise our ethical duties and morality. Both
              cases studies portray the misuse of AI to spread misinformation and injustice and the importance of
              designing networks that amplify the truth and preserve justice for all vulnerable groups.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

const contributors = [
  {
    name: "Shagota Islam Shudha",
    id: "24305052",
    excerpt:
      "Analysis of Israel-Palestine Conflict with Confucius Ethics and the Socratic Method, examining how AI-generated disinformation affects social harmony and justice.",
  },
  {
    name: "Naziba Khandker",
    id: "24305050",
    excerpt:
      "Exploring the extent to which AI should be allowed to take religious leadership through the lens of Consequentialism and Feminist Ethics.",
  },
  {
    name: "Shehrin Haque Shawr",
    id: "24308036",
    excerpt:
      "Examining China's policies in Xinjiang toward Uighur Muslims using Rawls' Theory of Justice and Kantian deontology.",
  },
  {
    name: "Irina Sumaiya",
    id: "24301111",
    excerpt:
      "Analysis of the persecution of Uighur Muslims in China with Deontological Ethics, Feminist Ethics, and Rawls' Theory of Justice.",
  },
  {
    name: "Shaoli Barua Megha",
    id: "24308013",
    excerpt:
      "The Promise and Risk of AI: A Utilitarian View, examining how AI can be both empowering and oppressive depending on its implementation.",
  },
]
