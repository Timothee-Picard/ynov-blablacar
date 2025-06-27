import { useState, useEffect } from 'react';
import { Car, Droplets, Plane, Cookie, Calculator, Leaf } from 'lucide-react';

export default function CalculatorComponent() {
	const [trips, setTrips] = useState<number>(0);
	const [passengers, setPassengers] = useState<number>(1);
	const [showResults, setShowResults] = useState(false);

	// Calculs
	const totalKm = trips * 100;
	const soloEmissions = totalKm * 0.2;
	const carpoolEmissions = totalKm * (0.2 / (passengers + 1));
	const co2Saved = soloEmissions - carpoolEmissions;

	// Équivalents
	const showers = Math.round((co2Saved / 2) * 10) / 10;
	const flightKm = Math.round((co2Saved / 0.25) * 10) / 10;
	const burgers = Math.round((co2Saved / 1.5) * 10) / 10;

	useEffect(() => {
		setShowResults(trips > 0 && passengers > 0)
	}, [trips, passengers]);
	return(
		<div className="max-w-4xl mx-auto px-4 py-8">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold text-gray-800 mb-4">
					Combien de CO₂ avez-vous évité ?
				</h2>
				<p className="text-xl text-gray-600 max-w-2xl mx-auto">
					Découvrez l'impact environnemental positif de vos trajets en covoiturage
					et visualisez vos économies avec des équivalents du quotidien.
				</p>
			</div>


			<div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden mb-8">
				<div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6">
					<div className="flex items-center gap-3 text-white">
						<Calculator className="h-6 w-6" />
						<h3 className="text-xl font-semibold">Calculateur d'impact</h3>
					</div>
				</div>

				<div className="p-8">
					<div className="grid md:grid-cols-2 gap-8">
						{/* Input 1: Trajets */}
						<div className="space-y-3">
							<label className="block text-sm font-semibold text-gray-700">
								Nombre de trajets en covoiturage
							</label>
							<div className="relative">
								<Car className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500" />
								<input
									type="number"
									min="0"
									value={trips || ''}
									onChange={(e) => setTrips(Number(e.target.value) || 0)}
									className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg"
									placeholder="Ex: 10"
								/>
							</div>
							<p className="text-sm text-gray-500">
								Chaque trajet fait en moyenne 100 km
							</p>
						</div>

						{/* Input 2: Passagers */}
						<div className="space-y-3">
							<label className="block text-sm font-semibold text-gray-700">
								Nombre moyen de passagers par trajet
							</label>
							<div className="relative">
								<div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
									<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
									<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
									<div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
								</div>
								<input
									type="number"
									min="1"
									value={passengers || ''}
									onChange={(e) => setPassengers(Number(e.target.value) || 1)}
									className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg"
									placeholder="Ex: 2"
								/>
							</div>
							<p className="text-sm text-gray-500">
								Sans compter le conducteur
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Results */}
			{showResults && co2Saved > 0 && (
				<div className={`transition-all duration-700 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
					{/* Main Result */}
					<div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white mb-8 shadow-xl">
						<div className="text-center">
							<h3 className="text-2xl font-semibold mb-2">Félicitations ! 🎉</h3>
							<div className="text-6xl font-bold mb-2">
								{co2Saved.toFixed(1)}
								<span className="text-2xl ml-2">kg CO₂</span>
							</div>
							<p className="text-xl opacity-90">évités grâce au covoiturage</p>
							<div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
								<p className="text-sm">
									Sur {trips} trajet{trips > 1 ? 's' : ''} ({totalKm} km) avec {passengers} passager{passengers > 1 ? 's' : ''} en moyenne
								</p>
							</div>
						</div>
					</div>

					{/* Equivalents */}
					<div className="grid md:grid-cols-3 gap-6">
						{/* Douches */}
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 bg-blue-100 rounded-full">
									<Droplets className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-800">Douches chaudes</h4>
									<p className="text-sm text-gray-600">évitées</p>
								</div>
							</div>
							<div className="text-3xl font-bold text-blue-600 mb-2">
								{showers}
							</div>
							<p className="text-sm text-gray-500">
								Une douche chaude = ~2 kg CO₂
							</p>
						</div>

						{/* Avion */}
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 bg-purple-100 rounded-full">
									<Plane className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-800">Kilomètres d'avion</h4>
									<p className="text-sm text-gray-600">évités</p>
								</div>
							</div>
							<div className="text-3xl font-bold text-purple-600 mb-2">
								{flightKm}
							</div>
							<p className="text-sm text-gray-500">
								1 km en avion = ~0.25 kg CO₂
							</p>
						</div>

						{/* Burgers */}
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 bg-orange-100 rounded-full">
									<Cookie className="h-6 w-6 text-orange-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-800">Burgers</h4>
									<p className="text-sm text-gray-600">évités</p>
								</div>
							</div>
							<div className="text-3xl font-bold text-orange-600 mb-2">
								{burgers}
							</div>
							<p className="text-sm text-gray-500">
								Un burger = ~1.5 kg CO₂
							</p>
						</div>
					</div>

					{/* Environmental Message */}
					<div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
						<div className="flex items-start gap-4">
							<div className="p-2 bg-green-500 rounded-full flex-shrink-0">
								<Leaf className="h-5 w-5 text-white" />
							</div>
							<div>
								<h4 className="font-semibold text-green-800 mb-2">
									Merci pour votre contribution à la planète ! 🌍
								</h4>
								<p className="text-green-700 text-sm leading-relaxed">
									En partageant vos trajets, vous réduisez non seulement les émissions de CO₂,
									mais aussi la congestion routière et les coûts de transport.
									Continuez ainsi et encouragez vos proches à faire de même !
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Empty State */}
			{trips === 0 && (
				<div className="text-center py-12">
					<Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
					<p className="text-gray-500 text-lg">
						Entrez vos informations pour découvrir votre impact positif !
					</p>
				</div>
			)}
		</div>
	)
}