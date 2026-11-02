import React, { useState } from 'react';
import { 
  UserCheck, 
  BookOpen, 
  HeartPulse, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Award,
  ChevronRight,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

const SAMPLE_STUDENTS = [
  {
    id: "child-1",
    name: "Kumari Ananya",
    native: "Hassan District, Rural Karnataka",
    currentGana: "Medha Gana (2nd Year / Class 7)",
    joinedYear: 2024,
    avatar: "/assets/images/banner-2.jpg",
    quote: "Sanskrit was completely new to me when I arrived. Today, I converse in it with my sisters and know 500 Amarakosha verses by heart.",
    admission: {
      status: "Admitted & Flourishing",
      interviewObservation: "Quiet, observant child with keen interest in music and nature. Quick learner from rural agricultural family.",
      familyInvolvement: "Parents participate in annual parents' satsang and provide seasonal farm produce for Annakshetra."
    },
    academics: {
      sanskrit: "Fluent conversational fluency; Ashtadhyayi Sutras 1-400 memorized.",
      stateCurriculum: "Excellent understanding of Mathematics and General Science.",
      kannadaEnglish: "Proficient in Kannada handwriting and basic English speaking."
    },
    health: {
      physical: "Suryanamaskar 12 cycles daily; balanced BMI, active digestion.",
      wellbeing: "Emotionally settled, joyous dormitory participation."
    },
    skills: {
      dance: "Bharatanatyam basic Adavus mastered.",
      arts: "Rangoli designs & Tulasi puja songs.",
      gandhari: "Participates in basic sensory blindfolded focus sessions."
    },
    responsibilities: {
      currentRole: "Assisting Annakshetra dining setup & water distribution.",
      peerMentoring: "Guides newer 1st-year Shradha Gana sisters with laundry."
    },
    mentorNote: "Ananya has grown significantly in confidence. Her shyness has transformed into gentle, attentive leadership among peers."
  },
  {
    id: "child-2",
    name: "Kumari Soundarya",
    native: "Chamarajanagar District, Karnataka",
    currentGana: "Pratibha Gana (4th Year / Class 9)",
    joinedYear: 2022,
    avatar: "/assets/images/Shubham-Karoti-005-1024x697.webp",
    quote: "Performing Harikatha in front of hundreds taught me that fear vanishes when you speak with sincere devotion.",
    admission: {
      status: "Admitted & Flourishing",
      interviewObservation: "Vocal talent identified during preliminary assessment. Strong cultural inclination.",
      familyInvolvement: "Single-mother household supported with complete zero-fee sponsorship."
    },
    academics: {
      sanskrit: "Cleared Karnataka Sanskrit University 'Prathama' examination with distinction.",
      stateCurriculum: "Top performer in Social Science & Environmental Studies.",
      kannadaEnglish: "Delivers public speeches in both Kannada and Sanskrit."
    },
    health: {
      physical: "Captain of the Gurukula Kho-Kho team; high stamina.",
      wellbeing: "Exceptional emotional resilience and supportive temperament."
    },
    skills: {
      dance: "Senior Bharatanatyam Varnam repertoire in progress.",
      arts: "Plays Harmonium and accompanies morning Bhajans.",
      gandhari: "Can read blindfolded flashcard words via enhanced tactile-sensory focus."
    },
    responsibilities: {
      currentRole: "Library In-Charge & Cultural Event Co-organizer.",
      peerMentoring: "Teaches Sanskrit pronunciation to Medha Gana students."
    },
    mentorNote: "Soundarya embodies leadership. She takes initiative during festival preparations and excels under pressure."
  },
  {
    id: "child-3",
    name: "Kumari Bhavana",
    native: "Shivamogga District, Karnataka",
    currentGana: "Dhee Gana (6th Year / 2nd PUC)",
    joinedYear: 2020,
    avatar: "/assets/images/Shubham-Karoti-019-1024x683.webp",
    quote: "Gurukula didn't just educate me; it gave me an unshakeable identity. I enter university with pride in my Vedic heritage.",
    admission: {
      status: "Graduating Scholar",
      interviewObservation: "Earnest and dedicated disposition. Enrolled under full family seva sponsorship.",
      familyInvolvement: "Active member of Shubha Dayini Alumni mentorship network."
    },
    academics: {
      sanskrit: "Cleared Sanskrit University 'Sahitya' examination; memorized 3,978 Ashtadhyayi sutras.",
      stateCurriculum: "Preparing for State Board 2nd PUC Commerce & Computer Science.",
      kannadaEnglish: "Bilingual debate champion; fluent in Sanskrit, Kannada, and English."
    },
    health: {
      physical: "Practices Advanced Yogasanas (Shirshasana, Mayurasana).",
      wellbeing: "Deep spiritual poise, daily Sandhyavandana and meditation."
    },
    skills: {
      dance: "Completed Arangetram level Bharatanatyam recital.",
      arts: "Solo Harikatha performance on 'Maitreyi-Yajnavalkya Samvada'.",
      gandhari: "Advanced concentration practitioner; mentors younger students."
    },
    responsibilities: {
      currentRole: "Senior Head Student (Mukhya Chhatra) overseeing student assembly.",
      peerMentoring: "Regularly conducts evening review circles for high school students."
    },
    mentorNote: "Bhavana is a shining testament to the 6-year Gurukula journey. She radiates moral courage, intellectual clarity, and humility."
  }
];

export const DIMENSIONS = [
  { id: "admission", title: "1. Admission & Foundation", icon: UserCheck, color: "#B46D4D" },
  { id: "academics", title: "2. Academics & 3-Board System", icon: BookOpen, color: "#173B32" },
  { id: "health", title: "3. Health & Well-being", icon: HeartPulse, color: "#B99858" },
  { id: "skills", title: "4. Skills & Traditional Arts", icon: Sparkles, color: "#8E7036" },
  { id: "responsibilities", title: "5. Leadership & Seva", icon: ShieldCheck, color: "#235246" },
  { id: "mentor", title: "6. Mentorship & Character", icon: MessageSquare, color: "#B46D4D" }
];

export default function StudentJourneyDemo() {
  const [selectedStudentId, setSelectedStudentId] = useState(SAMPLE_STUDENTS[0].id);
  const [activeDimension, setActiveDimension] = useState("academics");

  const student = SAMPLE_STUDENTS.find(s => s.id === selectedStudentId) || SAMPLE_STUDENTS[0];

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#B99858]/35 shadow-xl">
      {/* Intro Header */}
      <div className="border-b border-[#E6DFD1] pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#173B32]/10 text-[#173B32] text-xs font-semibold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-[#B99858]" />
            Student Journey Tracking System
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#173B32]">
            "Who is this child, and where is she in her journey?"
          </h3>
          <p className="text-xs sm:text-sm text-[#242824]/70 mt-1 max-w-2xl">
            As outlined in the Gurukula's institutional charter, every girl's growth is continuously supported across six integrated dimensions from admission through alumni bonding.
          </p>
        </div>

        {/* Student Selector */}
        <div className="flex items-center gap-2 self-center sm:self-auto bg-[#FAF8F5] p-1.5 rounded-2xl border border-[#E6DFD1]">
          {SAMPLE_STUDENTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStudentId(s.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                s.id === selectedStudentId
                  ? 'bg-[#173B32] text-white shadow-sm'
                  : 'text-[#242824]/70 hover:text-[#173B32]'
              }`}
            >
              {s.name.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Student Profile Ribbon */}
      <div className="bg-[#FAF6EE] rounded-2xl p-6 border border-[#B99858]/30 mb-8 flex flex-col md:flex-row items-center gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#B99858] shrink-0 shadow-md">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h4 className="text-xl font-serif font-bold text-[#173B32]">
              {student.name}
            </h4>
            <span className="px-2.5 py-0.5 rounded-full bg-[#173B32] text-[#DFCA95] text-xs font-mono font-semibold">
              {student.currentGana}
            </span>
          </div>
          <p className="text-xs text-[#242824]/70">
            Native: <strong className="text-[#173B32]">{student.native}</strong> • Enrolled: <strong className="text-[#173B32]">{student.joinedYear}</strong>
          </p>
          <p className="text-xs sm:text-sm font-serif italic text-[#8E7036] pt-1">
            "{student.quote}"
          </p>
        </div>
      </div>

      {/* Six Dimensions Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {DIMENSIONS.map((dim) => {
          const Icon = dim.icon;
          const isActive = activeDimension === dim.id;
          return (
            <button
              key={dim.id}
              onClick={() => setActiveDimension(dim.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#173B32] text-white border-[#B99858] shadow-md scale-102'
                  : 'bg-white text-[#242824]/80 border-[#E6DFD1] hover:border-[#B99858]/50 hover:bg-[#FAF8F5]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#DFCA95]' : 'text-[#8E7036]'}`} />
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA95]" />}
              </div>
              <span className="text-xs font-semibold leading-tight line-clamp-2">
                {dim.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dimension Detail Card */}
      <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E6DFD1]">
        {activeDimension === 'admission' && (
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#173B32] flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#B99858]" />
              Admission Assessment & Family Background
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Enrollment Status</span>
                <p className="text-[#173B32] font-semibold">{student.admission.status}</p>
                <p className="text-[#242824]/70 pt-1">Admitted into 6th Standard under 100% free lodging, boarding and academic sponsorship.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Intake Interview Note</span>
                <p className="text-[#242824]/90">{student.admission.interviewObservation}</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] text-xs sm:text-sm">
              <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px] mb-1">Family Seva & Connection</span>
              <p className="text-[#242824]/90">{student.admission.familyInvolvement}</p>
            </div>
          </div>
        )}

        {activeDimension === 'academics' && (
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#173B32] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#B99858]" />
              Three Examination Tracks & Academic Growth
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">1. Spoken Sanskrit & Grammar</span>
                <p className="text-[#173B32] font-semibold">{student.academics.sanskrit}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">2. State Board Curriculum</span>
                <p className="text-[#173B32] font-semibold">{student.academics.stateCurriculum}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">3. Languages & Expression</span>
                <p className="text-[#173B32] font-semibold">{student.academics.kannadaEnglish}</p>
              </div>
            </div>
          </div>
        )}

        {activeDimension === 'health' && (
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#173B32] flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-[#B99858]" />
              Physical Vitality & Mental Well-being
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Annamaya & Pranamaya Health</span>
                <p className="text-[#242824]/90">{student.health.physical}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Manomaya Emotional Poise</span>
                <p className="text-[#242824]/90">{student.health.wellbeing}</p>
              </div>
            </div>
          </div>
        )}

        {activeDimension === 'skills' && (
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#173B32] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#B99858]" />
              Traditional Arts, Bharatanatyam & Gandhari Vidya
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Classical Dance</span>
                <p className="text-[#173B32] font-semibold">{student.skills.dance}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Vocal & Instruments</span>
                <p className="text-[#173B32] font-semibold">{student.skills.arts}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Gandhari Vidya Practice</span>
                <p className="text-[#173B32] font-semibold">{student.skills.gandhari}</p>
              </div>
            </div>
          </div>
        )}

        {activeDimension === 'responsibilities' && (
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#173B32] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#B99858]" />
              Campus Responsibilities & Peer Mentoring
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Current Campus Duty</span>
                <p className="text-[#173B32] font-semibold">{student.responsibilities.currentRole}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD1] space-y-1">
                <span className="text-[#8E7036] font-bold block uppercase tracking-wider text-[11px]">Mentoring Junior Sisters</span>
                <p className="text-[#173B32] font-semibold">{student.responsibilities.peerMentoring}</p>
              </div>
            </div>
          </div>
        )}

        {activeDimension === 'mentor' && (
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#173B32] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#B99858]" />
              Teacher / Matrushree Qualitative Observations
            </h4>
            <div className="p-5 rounded-xl bg-white border-2 border-[#B99858]/30 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#8E7036]">
                <span className="font-bold">Continuous Formative Mentoring</span>
                <span>Tag: Positive Growth • Follow-up Completed</span>
              </div>
              <p className="text-sm text-[#242824] leading-relaxed italic font-serif">
                "{student.mentorNote}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
