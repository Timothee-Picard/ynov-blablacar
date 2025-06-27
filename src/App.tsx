import { useState, useEffect } from 'react';
import {
  Car,
  Leaf,
  Users,
  Lightbulb,
  TrendingUp,
  MapPin,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  Smartphone,
  Heart
} from 'lucide-react';
import CalculatorComponent from "./components/calculator/Calculator.tsx";

const StatCard = ({ icon: Icon, value, label, suffix = "" }) => (
  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
    <Icon className="h-8 w-8 text-white mx-auto mb-4" />
    <div className="text-3xl font-bold text-white mb-2">{value}{suffix}</div>
    <div className="text-green-100 text-sm">{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, color = "green" }) => {
  const colorClasses = {
    green: "bg-green-50 border-green-200 text-green-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800"
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`inline-flex p-3 rounded-xl ${colorClasses[color]} mb-6`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ name, role, content }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 mb-4">"{content}"</p>
    <div>
      <div className="font-semibold text-gray-900">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  </div>
);

function App() {
  const [co2Saved, setCo2Saved] = useState(1250000);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCo2Saved(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <img src="/BlaBlaCar_logo.png" alt="BlaBlaCar Logo" className="w-40 "/>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impact</a>
              <a href="#innovation" className="text-gray-700 hover:text-green-600 transition-colors">Innovation</a>
              <a href="#social" className="text-gray-700 hover:text-green-600 transition-colors">Social</a>
              <a href="#join" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Rejoindre
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-6 w-6 text-green-300" />
                <span className="text-green-300 font-medium">Transport Durable</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Révolutionnons 
                <span className="text-green-300"> ensemble </span> 
                la mobilité de demain
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Rejoignez la plus grande communauté de covoiturage en France et participez 
                activement à la transition écologique des transports. Chaque trajet partagé 
                est un pas vers un avenir plus vert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Commencer maintenant</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Voir notre impact</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard 
                icon={Leaf} 
                value={Math.floor(co2Saved / 1000)} 
                label="Tonnes de CO² évitées"
                suffix="k"
              />
              <StatCard 
                icon={Users} 
                value="12M" 
                label="Membres actifs"
              />
              <StatCard 
                icon={Car} 
                value="25M" 
                label="Trajets partagés"
              />
              <StatCard 
                icon={Globe} 
                value="98%" 
                label="Satisfaction utilisateurs"
              />
            </div>
          </div>
        </div>
      </section>

      <CalculatorComponent />

      {/* Message Écologique */}
      <section id="impact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <Leaf className="h-5 w-5" />
              <span className="font-medium">Impact Environnemental</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              L'écologie au cœur de chaque trajet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BlaBlaCar est bien plus qu'une plateforme de covoiturage. Nous sommes un acteur 
              majeur de la transition écologique, réduisant l'empreinte carbone des transports 
              en France de manière significative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard 
              icon={Leaf}
              title="Réduction CO² massive"
              description="Chaque trajet partagé évite en moyenne 1.6 tonnes de CO² par an. Notre communauté a déjà évité plus de 1.25 million de tonnes de CO²."
              color="green"
            />
            <FeatureCard 
              icon={Car}
              title="Moins de voitures sur les routes"
              description="En partageant les trajets, nous réduisons le nombre de véhicules en circulation, diminuant ainsi la congestion et la pollution urbaine."
              color="green"
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Impact mesurable"
              description="Nos données en temps réel montrent l'impact environnemental concret de chaque membre de notre communauté."
              color="green"
            />
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Notre engagement pour 2025
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">2 millions de tonnes de CO² évitées</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">20 millions de membres actifs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">100% d'énergie renouvelable pour nos serveurs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Partenariats avec 50 villes éco-responsables</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {(co2Saved / 1000).toFixed(0)}k
                </div>
                <div className="text-green-600 font-medium mb-4">
                  Tonnes de CO² évitées en temps réel
                </div>
                <div className="text-sm text-gray-600">
                  Mis à jour toutes les 3 secondes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Innovation */}
      <section id="innovation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="h-5 w-5" />
              <span className="font-medium">Innovation Technologique</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              La technologie au service de l'écologie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos innovations technologiques révolutionnent l'expérience du covoiturage 
              et maximisent l'impact environnemental positif de chaque trajet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Smartphone}
              title="IA Prédictive"
              description="Notre intelligence artificielle optimise les correspondances pour maximiser le taux d'occupation des véhicules et réduire les trajets à vide."
              color="blue"
            />
            <FeatureCard 
              icon={MapPin}
              title="Optimisation d'itinéraires"
              description="Algorithmes avancés qui calculent les trajets les plus efficaces, réduisant la consommation de carburant et les émissions."
              color="blue"
            />
            <FeatureCard 
              icon={Shield}
              title="Sécurité renforcée"
              description="Système de vérification d'identité et de notation qui garantit la confiance et encourage l'adoption du covoiturage."
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Message Social */}
      <section id="social" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Impact Social</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Créer du lien, réduire les inégalités
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Au-delà de l'écologie, BlaBlaCar tisse des liens sociaux et démocratise 
              l'accès à la mobilité pour tous, partout en France.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard 
              icon={Users}
              title="Inclusion sociale"
              description="Renforcer les liens entre les territoires urbains et ruraux, offrant des solutions de mobilité accessibles à tous."
              color="purple"
            />
            <FeatureCard 
              icon={Clock}
              title="Économies partagées"
              description="Réduire les coûts de transport de 70% en moyenne, rendant les déplacements abordables pour tous les budgets."
              color="purple"
            />
            <FeatureCard 
              icon={Globe}
              title="Communauté engagée"
              description="12 millions de membres qui partagent les mêmes valeurs écologiques et sociales, créant un impact collectif puissant."
              color="purple"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              name="Marie L., 28 ans"
              role="Utilisatrice depuis 3 ans"
              content="BlaBlaCar m'a permis de réduire mon empreinte carbone tout en rencontrant des personnes formidables. C'est ma contribution quotidienne à la planète."
            />
            <TestimonialCard 
              name="Thomas K., 35 ans"
              role="Conducteur régulier"
              content="En partageant mes trajets quotidiens, j'aide financièrement ma famille tout en participant à un mouvement écologique qui a du sens."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à faire la différence ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez dès aujourd'hui la communauté BlaBlaCar et participez activement 
            à la transition écologique des transports en France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Rejoindre la communauté</span>
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                
                <img src="/BlaBlaCar_logo_white.png" alt="BlaBlaCar Logo" className="w-40 "/>
              </div>
              <p className="text-gray-400">
                La plateforme de covoiturage qui révolutionne la mobilité durable en France.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Écologie</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Notre impact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Calculateur CO²</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rapports durabilité</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Innovation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Technologies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Développeurs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog Tech</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Communauté</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Témoignages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Événements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BlaBlaCar. Tous droits réservés. Ensemble pour une mobilité durable.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;