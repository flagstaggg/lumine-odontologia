export const TEAM = [
  {
    id: "helena",
    name: "Dra. Helena Albuquerque",
    shortName: "Helena Albuquerque",
    role: "Implantodontia",
    cro: "CRO-SC 12.845",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: "rafael",
    name: "Dr. Rafael Menezes",
    shortName: "Rafael Menezes",
    role: "Ortodontia",
    cro: "CRO-SC 14.209",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: "camila",
    name: "Dra. Camila Duarte",
    shortName: "Camila Duarte",
    role: "Estética e Lentes",
    cro: "CRO-SC 17.560",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: "lucas",
    name: "Dr. Lucas Brandão",
    shortName: "Lucas Brandão",
    role: "Clínica Geral e Prevenção",
    cro: "CRO-SC 11.372",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&h=800&q=80",
  },
];

export const getInitials = (name = "") =>
  name
    .replace(/^(Dra?\.|Dr\.)\s*/i, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();