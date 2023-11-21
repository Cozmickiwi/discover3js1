import{
    PerspectiveCamera,
    MeshStandardMaterial,
    WebGLRenderer,
    Scene,
    Mesh,
    Material,
    BoxBufferGeometry,
    MeshBasicMaterial,
} from 'three';
import{OrbitControls} from './vendor/three/examples/jsm/controls/OrbitControls.js';

const scene = new Scene();
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

const renderer = new WebGLRenderer();

const mesh = new Mesh(geometry, material);

//BoxBufferGeometry
const length = 2;
const width = 2;
const depth = 2;

const geometry = new BoxBufferGeometry(length, width, depth);

const material = new MeshBasicMaterial();