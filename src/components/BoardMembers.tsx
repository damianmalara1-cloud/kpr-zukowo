"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { UserIcon } from "@/components/Icons";

interface BoardMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

interface BoardMembersProps {
  members: BoardMember[];
}

export default function BoardMembers({ members }: BoardMembersProps) {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    if (selectedMember) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-6">
              {member.image ? (
                <div
                  className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 cursor-pointer hover:ring-4 hover:ring-navy/20 transition-all"
                  onClick={() => setSelectedMember(member)}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <UserIcon className="w-10 h-10 text-white" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-bold text-xl text-navy mb-1">{member.name}</h3>
                <p className="text-red font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedMember?.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-md" />

          <div
            className="relative z-10 max-w-lg w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
              <p className="text-gray-300 mt-1">{selectedMember.role}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
