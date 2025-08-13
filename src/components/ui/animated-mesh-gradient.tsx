import React, { useEffect } from 'react';

interface AnimatedMeshGradientProps {
  primaryColor?: string;
  secondaryColor?: string;
  overlayOpacity?: number;
}

const AnimatedMeshGradient: React.FC<AnimatedMeshGradientProps> = ({ 
  primaryColor = '#FD8735', 
  secondaryColor = '#007AFF',
  overlayOpacity = 0.3 
}) => {
  useEffect(() => {
    // Inject CSS animations into the document head
    const styleId = 'animated-mesh-gradient-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -50px) scale(1.2); }
          50% { transform: translate(-40px, 40px) scale(0.8); }
          75% { transform: translate(40px, 20px) scale(1.1); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-45px, 55px) scale(0.9); }
          50% { transform: translate(60px, -35px) scale(1.3); }
          75% { transform: translate(-25px, -45px) scale(1.05); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(55px, 40px) scale(1.15); }
          50% { transform: translate(-50px, -45px) scale(0.85); }
          75% { transform: translate(20px, 50px) scale(1.25); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, -55px) scale(0.9); }
          50% { transform: translate(45px, 45px) scale(1.3); }
          75% { transform: translate(-50px, 25px) scale(0.95); }
        }
        
        @keyframes float5 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          25% { transform: translate(calc(-50% + 40px), calc(-50% - 40px)) scale(1.2); }
          50% { transform: translate(calc(-50% - 35px), calc(-50% + 45px)) scale(0.8); }
          75% { transform: translate(calc(-50% + 45px), calc(-50% + 20px)) scale(1.15); }
        }
        
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-50px, 45px) scale(0.85); }
          50% { transform: translate(55px, -50px) scale(1.4); }
          75% { transform: translate(-20px, -40px) scale(1.1); }
        }
        
        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, -40px) scale(1.25); }
          50% { transform: translate(-55px, 50px) scale(0.8); }
          75% { transform: translate(25px, -55px) scale(1.35); }
        }
        
        @keyframes float8 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-25px, -60px) scale(0.9); }
          50% { transform: translate(50px, 40px) scale(1.4); }
          75% { transform: translate(-45px, 55px) scale(0.95); }
        }
        
        @keyframes float9 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(45px, 60px) scale(1.2); }
          50% { transform: translate(-60px, -25px) scale(0.75); }
          75% { transform: translate(40px, -50px) scale(1.3); }
        }
        
        @keyframes float10 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-60px, 25px) scale(1.35); }
          50% { transform: translate(40px, -60px) scale(0.85); }
          75% { transform: translate(55px, 45px) scale(1.15); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  
  return (
    <>
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient blobs - Primary Color */}
        <div className="absolute w-[600px] h-[500px] rounded-full blur-3xl opacity-80"
             style={{
               background: primaryColor,
               animation: 'float1 6s ease-in-out infinite',
               top: '-10%',
               left: '5%'
             }}></div>
        
        <div className="absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-75"
             style={{
               background: secondaryColor,
               animation: 'float2 5s ease-in-out infinite reverse',
               top: '-5%',
               right: '-15%'
             }}></div>
        
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-70"
             style={{
               background: primaryColor,
               animation: 'float3 7s ease-in-out infinite',
               bottom: '-10%',
               left: '-5%'
             }}></div>
        
        <div className="absolute w-[580px] h-[580px] rounded-full blur-3xl opacity-65"
             style={{
               background: secondaryColor,
               animation: 'float4 4.5s ease-in-out infinite reverse',
               bottom: '-5%',
               right: '-10%'
             }}></div>
        
        <div className="absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-60"
             style={{
               background: primaryColor,
               animation: 'float5 5.5s ease-in-out infinite',
               top: '60%',
               left: '45%',
               transform: 'translate(-50%, -50%)'
             }}></div>
        
        {/* Additional blobs for better coverage */}
        <div className="absolute w-[580px] h-[580px] rounded-full blur-3xl opacity-55"
             style={{
               background: secondaryColor,
               animation: 'float6 8s ease-in-out infinite',
               top: '30%',
               left: '10%'
             }}></div>
        
        <div className="absolute w-[520px] h-[520px] rounded-full blur-3xl opacity-50"
             style={{
               background: primaryColor,
               animation: 'float7 6.5s ease-in-out infinite reverse',
               top: '60%',
               right: '20%'
             }}></div>
        
        <div className="absolute w-[520px] h-[520px] rounded-full blur-3xl opacity-65"
             style={{
               background: secondaryColor,
               animation: 'float8 4s ease-in-out infinite',
               bottom: '40%',
               left: '60%'
             }}></div>
        
        <div className="absolute w-[560px] h-[560px] rounded-full blur-3xl opacity-55"
             style={{
               background: primaryColor,
               animation: 'float9 7.5s ease-in-out infinite reverse',
               top: '10%',
               left: '70%'
             }}></div>
        
        <div className="absolute w-[560px] h-[560px] rounded-full blur-3xl opacity-60"
             style={{
               background: secondaryColor,
               animation: 'float10 9s ease-in-out infinite',
               bottom: '30%',
               right: '40%'
             }}></div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      ></div>
    </>
  );
};

export default AnimatedMeshGradient;