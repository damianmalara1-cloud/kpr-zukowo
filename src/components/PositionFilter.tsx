"use client";

import { useState, useEffect } from "react";
import { UserIcon } from "@/components/Icons";

interface Player {
  id: string;
  firstName: string;
  lastName: string;
  number: number;
  position: string;
  positionGroup: string;
  photo: string | null;
  onLoan?: boolean;
}

interface Staff {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  photo: string | null;
}

interface SelectedPerson {
  photo: string;
  firstName: string;
  lastName: string;
  role?: string;
  number?: number;
  position?: string;
  onLoan?: boolean;
}

interface PositionFilterProps {
  players: Player[];
  staff: Staff[];
}

const POSITION_GROUPS = [
  "Wszyscy",
  "Bramkarze",
  "Rozgrywający",
  "Skrzydłowi",
  "Obrotowi",
];

export default function PositionFilter({ players, staff }: PositionFilterProps) {
  const [activeFilter, setActiveFilter] = useState("Wszyscy");
  const [selectedPerson, setSelectedPerson] = useState<SelectedPerson | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPerson(null);
    };
    if (selectedPerson) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedPerson]);

  const filteredPlayers =
    activeFilter === "Wszyscy"
      ? players
      : players.filter((p) => p.positionGroup === activeFilter);

  return (
    <>
      {/* Sztab szkoleniowy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-wide">
          Sztab szkoleniowy
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {staff.map((person, index) => (
            <div
              key={person.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all ${person.photo ? "cursor-pointer" : ""}`}
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => person.photo && setSelectedPerson({
                photo: person.photo,
                firstName: person.firstName,
                lastName: person.lastName,
                role: person.role,
              })}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={`${person.firstName} ${person.lastName}`}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <UserIcon className="w-20 h-20 text-gray-300" />
                )}
                {/* Diagonal overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3 bg-navy/80"
                  style={{ clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0% 100%)" }}
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {person.role}
                </p>
                <p className="text-sm text-gray-500">{person.firstName}</p>
                <p className="text-lg font-bold text-navy leading-tight">
                  {person.lastName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filtr pozycji */}
      <section>
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-navy uppercase tracking-wide">
            Zawodnicy
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {POSITION_GROUPS.map((group) => (
              <button
                key={group}
                onClick={() => setActiveFilter(group)}
                className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all whitespace-nowrap ${
                  activeFilter === group
                    ? "bg-red text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-navy"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Player grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPlayers.map((player, index) => (
            <div
              key={player.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group animate-fade-in ${player.photo ? "cursor-pointer" : ""}`}
              style={{ animationDelay: `${index * 60}ms` }}
              onClick={() => player.photo && setSelectedPerson({
                photo: player.photo,
                firstName: player.firstName,
                lastName: player.lastName,
                number: player.number,
                position: player.position,
                onLoan: player.onLoan,
              })}
            >
              {/* Photo area */}
              <div className={`aspect-square bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center relative overflow-hidden ${player.onLoan ? "grayscale" : ""}`}>
                {player.photo ? (
                  <img
                    src={player.photo}
                    alt={`${player.firstName} ${player.lastName}`}
                    className="w-full h-full object-cover object-top relative z-10 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-white/10 text-[8rem] font-black leading-none select-none group-hover:scale-110 transition-transform duration-300">
                    {player.number}
                  </span>
                )}

                {/* On loan badge */}
                {player.onLoan && (
                  <div className="absolute top-3 right-3 z-30">
                    <span className="bg-gray-700 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-lg">
                      Wypożyczony
                    </span>
                  </div>
                )}

                {/* Number badge - mobile */}
                <div className="absolute top-3 left-3 z-20 lg:hidden">
                  <span className="bg-red text-white text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center shadow-lg">
                    {player.number}
                  </span>
                </div>

                {/* Diagonal overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-navy-dark/90 to-transparent z-10"
                  style={{ clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0% 100%)" }}
                />

                {/* Position tag on overlay */}
                <span className="absolute bottom-2 right-3 z-20 text-[10px] text-gray-300 uppercase tracking-widest font-medium">
                  {player.position}
                </span>
              </div>

              {/* Info area */}
              <div className="p-4 flex items-center gap-3">
                {/* Number - desktop only */}
                <span className="hidden lg:block text-2xl font-black text-gray-200 w-9 shrink-0 text-center">
                  {player.number}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 truncate">{player.firstName}</p>
                  <p className="text-base font-bold text-navy leading-tight truncate">
                    {player.lastName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            Brak zawodników w tej pozycji.
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedPerson && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPerson(null)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-md" />

          {/* Modal content */}
          <div
            className="relative z-10 max-w-lg w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Photo */}
            <div className={`rounded-2xl overflow-hidden shadow-2xl ${selectedPerson.onLoan ? "grayscale" : ""}`}>
              <img
                src={selectedPerson.photo}
                alt={`${selectedPerson.firstName} ${selectedPerson.lastName}`}
                className="w-full h-auto"
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-center text-white">
              {selectedPerson.number && (
                <span className="inline-block bg-red text-white text-lg font-bold w-10 h-10 rounded-full leading-10 mb-2">
                  {selectedPerson.number}
                </span>
              )}
              <h3 className="text-2xl font-bold">
                {selectedPerson.firstName} {selectedPerson.lastName}
              </h3>
              <p className="text-gray-300 mt-1">
                {selectedPerson.position || selectedPerson.role}
              </p>
              {selectedPerson.onLoan && (
                <span className="inline-block mt-2 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                  Wypożyczony
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
