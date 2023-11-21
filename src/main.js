import{
    PerspectiveCamera,
    MeshStandardMaterial,
    WebGLRenderer,
    Scene,
} from 'three';
import{OrbitControls} from './vendor/three/examples/jsm/controls/OrbitControls.js';

const scene = new Scene();
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

const renderer = new WebGLRenderer();