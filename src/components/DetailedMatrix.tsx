import React from "react";

interface StepItem {
  id: string;
  stepNum: string;
  title: string;
  description: string;
  isGold?: boolean;
  alertText?: string;
  icon: React.ReactNode;      // Card header icon
  axisIcon: React.ReactNode;  // Opposite side circle badge icon
}

export default function DetailedMatrix() {
  const steps: StepItem[] = [
    {
      id: "step-1",
      stepNum: "Step 01",
      title: "You Schedule (60 Seconds)",
      description: "Book your pickup online at lodvalet.com or via our app. Select your exact preferred time window. No confusing forms, just a few clicks to a laundry-free week.",
      alertText: "Wednesday pickups fill fastest. Schedule early to secure your preferred slot.",
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      ),
      axisIcon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 9.152c.582.448 1.148.89 1.676 1.345m-1.676-1.345c-.528-.407-1.102-.816-1.716-1.224m3.392 2.569c.516.438.99.885 1.412 1.339m-4.804-3.908c-.544-.396-1.127-.78-1.748-1.15m6.552 5.058c.376.4.708.814.996 1.238m-7.548-6.296c-.538-.352-1.1-.692-1.685-1.018m9.233 7.314c.22.368.398.74.536 1.116M9.27 4.269c-.504-.265-1.026-.51-1.562-.734m10.798 8.05a8.25 8.25 0 0 1-7.234 10.404m-4.395-.872c-.547-.224-1.074-.49-1.579-.792m8.902 2.398a8.25 8.25 0 0 1-6.994-4.303m0 0a8.243 8.243 0 0 1-.99-4.014m0 0a8.249 8.249 0 0 1 3.578-6.804m0 0c.546-.356 1.125-.67 1.73-.939m-4.309 6.945a3 3 0 0 1 3.259-3.259m0 0a3 3 0 0 1 3.259 3.259m0 0a3 3 0 0 1-3.259 3.259m0 0a3 3 0 0 1-3.259-3.259" />
        </svg>
      )
    },
    {
      id: "step-2",
      stepNum: "Step 02",
      title: "Driver Picks Up",
      description: "Receive a text 30 minutes before arrival. Your valet weighs your bag at the door, photographs the seal, and secures it in their vehicle for transport to our partner facility.",
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.75A1.125 1.125 0 0 1 2.625 17.625V4.625A1.125 1.125 0 0 1 3.75 3.5h9.75a1.125 1.125 0 0 1 1.125 1.125v10.125m-11.25 0h11.25m0 0h1.5v-6.875a3.375 3.375 0 0 0-.989-2.386l-2.502-2.502a3.375 3.375 0 0 0-2.386-.989H14.625m0 16.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.5m-13.5 0h1.5" />
        </svg>
      ),
      axisIcon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.75A1.125 1.125 0 0 1 2.625 17.625V4.625A1.125 1.125 0 0 1 3.75 3.5h9.75a1.125 1.125 0 0 1 1.125 1.125v10.125m-11.25 0h11.25m0 0h1.5v-6.875a3.375 3.375 0 0 0-.989-2.386l-2.502-2.502a3.375 3.375 0 0 0-2.386-.989H14.625m0 16.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.5m-13.5 0h1.5" />
        </svg>
      )
    },
    {
      id: "step-3",
      stepNum: "Step 03",
      title: "Partner Facility Processes",
      description: "Your garments are taken to our strictly vetted partner facilities. Colors are meticulously sorted, pockets checked, and items washed using eco-friendly, premium detergents. Finally, the LOD standard precise fold is applied.",
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      axisIcon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
        </svg>
      )
    },
    {
      id: "step-4",
      stepNum: "Step 04",
      title: "Quality Check",
      description: "Every order undergoes a rigorous retail-store standard checklist inspection. We check for lingering stains, perfect folds, and accurate item counts before securely assigning it for delivery.",
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      axisIcon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "step-5",
      stepNum: "Step 05",
      title: "Delivered Back",
      description: "Your pristine laundry is returned during your chosen delivery window. You'll receive a confirmation text the moment it's securely placed at your door, ready to be put straight into your closet.",
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      axisIcon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: "step-6",
      stepNum: "Step 06",
      title: "Streak + Review",
      description: "Rate your service to help us maintain perfection. Keep the routine going to build your streak—every 10th bag earns a free Essential or $14.99 credit. Loyalty rewarded effortlessly.",
      isGold: true,
      icon: (
        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.172-.468.86-.468 1.03 0l2.122 5.466 5.922.8c.513.07.719.699.336 1.054L16.63 15.53l1.196 5.864a.596.596 0 0 1-.854.62L11.75 19.33l-5.222 2.684a.596.596 0 0 1-.854-.62l1.196-5.864L2.112 11.42c-.383-.355-.177-1.02.336-1.054l5.922-.8L11.48 3.5Z" />
        </svg>
      ),
      axisIcon: (
        <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.172-.468.86-.468 1.03 0l2.122 5.466 5.922.8c.513.07.719.699.336 1.054L16.63 15.53l1.196 5.864a.596.596 0 0 1-.854.62L11.75 19.33l-5.222 2.684a.596.596 0 0 1-.854-.62l1.196-5.864L2.112 11.42c-.383-.355-.177-1.02.336-1.054l5.922-.8L11.48 3.5Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-surface py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-[24px] lg:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-outline-variant/30 hidden lg:block" />
          
          {/* Timeline Steps */}
          <div className="space-y-16 lg:space-y-24 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              
              // Dynamic border highlights based on alternating column position
              const borderStyles = step.isGold
                ? "border-t border-l border-b border-r-4 border-r-secondary border-[#eec058]/25 shadow-[0_0_15px_rgba(238,192,88,0.04)]"
                : isEven
                  ? "border-t border-l border-b border-r-4 border-r-primary border-outline-variant/20 hover:border-primary/50"
                  : "border-t border-r border-b border-l-4 border-l-primary border-outline-variant/20 hover:border-primary/50";

              return (
                <div 
                  key={step.id} 
                  className="relative lg:grid lg:grid-cols-2 lg:gap-x-24 lg:items-center min-h-[220px]"
                >
                  {/* Outer column rendering depends on odd/even step */}
                  {!isEven ? (
                    <>
                      {/* Left: Card */}
                      <div className="lg:pr-8">
                        <div 
                          className={`relative p-6 md:p-8 rounded-lg bg-surface-container-low text-[#dde4e1] transition-all duration-300 hover:scale-[1.01] ${borderStyles}`}
                        >
                          {/* Step Badge & Header Icon */}
                          <div className="flex items-center gap-2 mb-4">
                            {step.icon}
                            <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                              {step.stepNum}
                            </span>
                          </div>

                          {/* Card Title */}
                          <h3 className="font-heading font-semibold text-xl md:text-2xl text-white mb-3 tracking-tight">
                            {step.title}
                          </h3>

                          {/* Card Body */}
                          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                            {step.description}
                          </p>

                          {/* Optional Alert Box inside step 1 */}
                          {step.alertText && (
                            <div className="mt-5 p-4 rounded bg-surface-container-lowest border border-outline-variant/25 flex items-start gap-3">
                              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z" />
                              </svg>
                              <span className="font-sans text-xs md:text-sm text-on-surface-variant">
                                {step.alertText}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Right: Large Circle Badge on the opposite side of the card */}
                      <div className="hidden lg:flex justify-center items-center">
                        <div className="w-20 h-20 rounded-full bg-surface-container-low border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(66,222,195,0.08)] transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-[0_0_25px_rgba(66,222,195,0.2)]">
                          {step.axisIcon}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Large Circle Badge on the opposite side of the card */}
                      <div className="hidden lg:flex justify-center items-center">
                        <div className={`w-20 h-20 rounded-full bg-surface-container-low border flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                          step.isGold
                            ? "border-secondary/20 shadow-[0_0_15px_rgba(238,192,88,0.08)] hover:border-secondary/60 hover:shadow-[0_0_25px_rgba(238,192,88,0.2)]"
                            : "border-primary/20 shadow-[0_0_15px_rgba(66,222,195,0.08)] hover:border-primary/60 hover:shadow-[0_0_25px_rgba(66,222,195,0.2)]"
                        }`}>
                          {step.axisIcon}
                        </div>
                      </div>

                      {/* Right: Card */}
                      <div className="lg:pl-8">
                        <div 
                          className={`relative p-6 md:p-8 rounded-lg bg-surface-container-low text-[#dde4e1] transition-all duration-300 hover:scale-[1.01] ${borderStyles}`}
                        >
                          {/* Step Badge & Header Icon */}
                          <div className="flex items-center gap-2 mb-4">
                            {step.icon}
                            <span className={`font-sans text-xs font-bold uppercase tracking-wider ${step.isGold ? "text-secondary" : "text-primary"}`}>
                              {step.stepNum}
                            </span>
                          </div>

                          {/* Card Title */}
                          <h3 className="font-heading font-semibold text-xl md:text-2xl text-white mb-3 tracking-tight">
                            {step.title}
                          </h3>

                          {/* Card Body */}
                          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
