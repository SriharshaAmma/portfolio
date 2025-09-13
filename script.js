// -----------------------------
// Loading Screen
// -----------------------------
window.addEventListener("load", () => {
  const loader = document.getElementById("loading");
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = "none", 500);
});

// -----------------------------
// Animated Background (Three.js)
// -----------------------------
const canvas = document.getElementById("bg-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.BufferGeometry();
const particleCount = 1000; // reduced for performance
const positions = new Float32Array(particleCount * 3);

for(let i=0; i<particleCount*3; i++) {
  positions[i] = (Math.random() - 0.5) * 50;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({ color: 0x6366f1, size: 0.2 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 25;

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.0005;
  particles.rotation.x += 0.0005;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// -----------------------------
// Scroll Animations (IntersectionObserver)
// -----------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// -----------------------------
// Contact Form Submission
// -----------------------------
function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("status");
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  // Simple validation
  if(!name || !email || !message) {
    status.textContent = "Please fill in all fields!";
    status.className = "form-status";
    return;
  }

  // Simulate async submission
  status.textContent = "Sending...";
  status.className = "form-status";

  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    status.className = "form-status success";
    form.reset();
  }, 1000);
}

window.submitForm = submitForm;
