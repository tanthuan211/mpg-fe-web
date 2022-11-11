    const steps = [
      { name: 'Step 1', href: '#', status: 'complete' },
      { name: 'Step 2', href: '#', status: 'current' },
      { name: 'Step 3', href: '#', status: 'upcoming' },
      { name: 'Step 4', href: '#', status: 'upcoming' },
      { name: 'Step 5', href: '#', status: 'upcoming' },
      { name: 'Step 6', href: '#', status: 'upcoming' },
      { name: 'Step 7', href: '#', status: 'upcoming' },
    ]
    
    function classNames(...classes: string[]) {
      return classes.filter(Boolean).join(' ')
    }
    
    export function ProductSteps() {
      return (
        <nav aria-label="Progress">
          <ol role="list" className="flex items-center justify-center w-[620px]">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className={`${classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-[90px]' : '', 'relative')}`}>
                {step.status === 'complete' ? (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-[#7E8082]" />
                    </div>
                    <a
                     
                      className="group relative flex h-3 w-3 items-center justify-center bg-white"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-transparent bg-[#7E8082]"
                        aria-hidden="true"
                      />
                      <span className="sr-only">{step.name}</span>
                    </a>
                  </>
                ) : step.status === 'current' ? (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <a
                     
                      className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-white"
                      aria-current="step"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
                      <span className="sr-only">{step.name}</span>
                    </a>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <a
                     
                      className="group relative flex h-3 w-3 items-center justify-center bg-white"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-transparent bg-gray-300"
                        aria-hidden="true"
                      />
                      <span className="sr-only">{step.name}</span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )
    }
    