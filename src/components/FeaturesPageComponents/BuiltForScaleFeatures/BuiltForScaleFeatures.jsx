import React from 'react';
import { Activity, ShieldCheck, Server, Database } from 'lucide-react';
import './BuiltForScaleFeatures.css';

function BuiltForScaleFeatures() {
  const features = [
    {
      id: 1,
      icon: <Activity size={20} className="featureIconBuiltForScaleFeatures" />,
      title: "99.9%",
      desc: "Uptime Guarantee"
    },
    {
      id: 2,
      icon: <ShieldCheck size={20} className="featureIconBuiltForScaleFeatures" />,
      title: "Secure Payments",
      desc: "Industry standard security"
    },
    {
      id: 3,
      icon: <Server size={20} className="featureIconBuiltForScaleFeatures" />,
      title: "Scalable Infrastructure",
      desc: "Ready for your growth"
    },
    {
      id: 4,
      icon: <Database size={20} className="featureIconBuiltForScaleFeatures" />,
      title: "Automated Backups",
      desc: "Your data, always safe"
    }
  ];

  return (
    <section className="sectionWrapperBuiltForScaleFeatures">
      {/* Background Gradient Overlay */}
      <div className="bgOverlayBuiltForScaleFeatures"></div>
      
      <div className="containerBuiltForScaleFeatures">
        
        {/* Top Text Content */}
        <div className="textContentBuiltForScaleFeatures animFadeUpBuiltForScaleFeatures">
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
            SECURITY AND PERFORMANCE
          </div>
          
          <h2 className="headingBuiltForScaleFeatures">
            Built for Scale. Backed by Trust.
          </h2>
          
          <p className="descriptionBuiltForScaleFeatures">
            Enterprise-grade security, reliable infrastructure and the performance 
            you need to grow without limits.
          </p>
        </div>

        {/* Bottom Features Row */}
        <div className="featuresRowBuiltForScaleFeatures">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`featureItemBuiltForScaleFeatures animDelay${index + 1}BuiltForScaleFeatures`}
            >
              <div className="featureIconBoxBuiltForScaleFeatures">
                {feature.icon}
              </div>
              <div className="featureTextWrapperBuiltForScaleFeatures">
                <h4 className="featureTitleBuiltForScaleFeatures">{feature.title}</h4>
                <p className="featureDescBuiltForScaleFeatures">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BuiltForScaleFeatures;