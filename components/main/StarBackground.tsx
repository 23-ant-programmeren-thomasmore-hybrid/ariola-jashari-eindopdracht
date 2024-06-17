"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.5 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20; // Slower rotation on x-axis
        ref.current.rotation.y -= delta / 10; // Faster rotation on y-axis
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#FFD700" // Changed color to gold
                    size={0.005} // Increased size
                    sizeAttenuation={true}
                    depthWrite={false} // Corrected typo
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas