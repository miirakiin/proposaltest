import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Layout } from './components/Layout';
import { IntroScreen } from './components/IntroScreen';
import { MessageScreen } from './components/MessageScreen';
import { DeclarationsScreen } from './components/DeclarationsScreen';
import { TransitionScreen } from './components/TransitionScreen';
import { ProposalScreen } from './components/ProposalScreen';
import { CelebrationScreen } from './components/CelebrationScreen';
import { PageTransition } from './components/PageTransition';

type Step = 'intro' | 'message' | 'declarations' | 'transition' | 'proposal' | 'celebration';

export function App() {
  const [currentStep, setCurrentStep] = useState<Step>('intro');

  const nextStep = () => {
    const steps: Step[] = ['intro', 'message', 'declarations', 'transition', 'proposal', 'celebration'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {currentStep === 'intro' && (
          <PageTransition key="intro" variant="scale">
            <IntroScreen onContinue={nextStep} />
          </PageTransition>
        )}
        {currentStep === 'message' && (
          <PageTransition key="message" variant="slideUp">
            <MessageScreen onContinue={nextStep} />
          </PageTransition>
        )}
        {currentStep === 'declarations' && (
          <PageTransition key="declarations" variant="fade">
            <DeclarationsScreen onContinue={nextStep} />
          </PageTransition>
        )}
        {currentStep === 'transition' && (
          <PageTransition key="transition" variant="slideDown">
            <TransitionScreen onContinue={nextStep} />
          </PageTransition>
        )}
        {currentStep === 'proposal' && (
          <PageTransition key="proposal" variant="scale">
            <ProposalScreen onYes={nextStep} />
          </PageTransition>
        )}
        {currentStep === 'celebration' && (
          <PageTransition key="celebration" variant="fade">
            <CelebrationScreen />
          </PageTransition>
        )}
      </AnimatePresence>
    </Layout>
  );
}