/**
 * Pointless — The Overcomplicated Everyday Decision Generator
 * Pure Vanilla JavaScript (No external libraries, 100% self-contained)
 * Styled with modern Shadcn/UI component principles
 */

// =============================================================================
// 1. DATA REPOSITORY: Dilemmas, Ridiculous Verdicts, Rationales & Confidences
// =============================================================================

const DECISIONS_DATA = [
  // --- CHORES & ROUTINE ---
  {
    category: "chores",
    categoryName: "🧦 Chores & Routine",
    question: "Should I fold my clean laundry right now?",
    verdict: "Form the pile into a sacred decorative hill on your chair. Introduce it to guests as modern fiber art.",
    worse: "Put on all 14 shirts at the same time to avoid laundry altogether. You are now cold-proof and a sphere.",
    rationale: "Folding introduces artificial structural tension into the cotton fibers, damaging their spiritual integrity.",
    confidence: 98.4,
    subtext: "Margin of error: ±140%"
  },
  {
    category: "chores",
    categoryName: "🧦 Chores & Routine",
    question: "Should I get out of bed right this second?",
    verdict: "Roll horizontally like an artisanal burrito until you hit the floor. Evaluate your options from ground level.",
    worse: "Declare your bed a sovereign micronation. Refuse entry to work and gravity without a valid diplomatic passport.",
    rationale: "Rapid vertical transitions cause sudden barometric shifts in your personal aura.",
    confidence: 89.1,
    subtext: "Validated by three sleeping cats"
  },
  {
    category: "chores",
    categoryName: "🧦 Chores & Routine",
    question: "Should I wash the single coffee mug in the sink?",
    verdict: "Stare deeply into the remaining coffee sediment. Interpret the future like an ancient oracle, then walk away.",
    worse: "Fill the mug with potting soil and plant a succulent. You no longer have dirty dishes; you have botanical fauna.",
    rationale: "Water is a finite resource that prefers running wild in rivers rather than cleansing porcelain.",
    confidence: 94.7,
    subtext: "Tested on 4 out of 5 procrastinators"
  },
  {
    category: "chores",
    categoryName: "🧦 Chores & Routine",
    question: "Which shoe should I put on first today?",
    verdict: "Put both shoes on your hands and crawl backward down the hallway to confuse your smart pedometer.",
    worse: "Tie both shoelaces together and hop. Asymmetry builds core stability and neighborhood intrigue.",
    rationale: "Choosing one foot first creates a subtle favoritism that makes your limbs resent each other.",
    confidence: 76.2,
    subtext: "Based on questionable biomechanics"
  },
  {
    category: "chores",
    categoryName: "🧦 Chores & Routine",
    question: "Should I wash my favorite jeans or spray them with air freshener?",
    verdict: "Hang them outside in the wind for 4 minutes so the atmosphere absorbs the moral ambiguity.",
    worse: "Freeze them in the icebox with frozen peas. Tell anyone who asks that it preserves the denim's vintage soul.",
    rationale: "Washing machines strip denim of its accumulated life wisdom and structural stoicism.",
    confidence: 93.6,
    subtext: "Approved by amateur microbiologists"
  },
  {
    category: "chores",
    categoryName: "🧦 Chores & Routine",
    question: "Should I make my bed this morning?",
    verdict: "Throw a velvet sheet over the chaos and label it 'Abstract Expressionism #4'.",
    worse: "Take the mattress off the frame and sleep on the bare slats to eliminate bed-making forever.",
    rationale: "An unmade bed is simply an honest bed. Smooth sheets are a bourgeois illusion.",
    confidence: 91.5,
    subtext: "Confirmed by dust mites union"
  },

  // --- WORK & STUDY ---
  {
    category: "work",
    categoryName: "💼 Work & Study",
    question: "Should I reply to this urgent email right now?",
    verdict: "Reply with a high-resolution, uncaptioned photo of an heirloom turnip. Await their response.",
    worse: "Set an automated out-of-office message stating you have embarked on a vision quest inside the supply closet.",
    rationale: "Immediate replies project desperate accessibility. The turnip establishes enigmatic dominance.",
    confidence: 96.8,
    subtext: "Corporate efficiency score: -450%"
  },
  {
    category: "work",
    categoryName: "💼 Work & Study",
    question: "Should I write 'per my last email' in this passive-aggressive work reply?",
    verdict: "Instead, send an audio recording of yourself sighing in B-flat minor for 8 uninterrupted seconds.",
    worse: "Attach a 40-page PDF containing only the word 'AS PREVIOUSLY ARTICULATED' in Wingdings font.",
    rationale: "Musical sighs express bureaucratic despair far more eloquently than standard office prose.",
    confidence: 97.3,
    subtext: "HR inquiry avoidance: 41%"
  },
  {
    category: "work",
    categoryName: "💼 Work & Study",
    question: "Should I speak up during this 45-person video conference?",
    verdict: "Nod solemnly every 18 seconds while occasionally whispering 'synergy' under your breath.",
    worse: "Unmute your mic, play ocean wave sounds at 100% volume, and claim your microphone caught coastal wind.",
    rationale: "True visionaries communicate through silence and ambient head tilts.",
    confidence: 84.3,
    subtext: "Zero meeting minutes were harmed"
  },
  {
    category: "work",
    categoryName: "💼 Work & Study",
    question: "Should I start studying for tomorrow's exam?",
    verdict: "Place the textbook beneath your pillow and attempt passive osmotic knowledge transfer during a 4-hour nap.",
    worse: "Highlight literally every single sentence in neon yellow so the entire book is uniformly glowing.",
    rationale: "Active reading exerts your neocortex; gentle skull-to-paper vibration preserves critical neuron juice.",
    confidence: 12.4,
    subtext: "Margin of error: ±99.9%"
  },
  {
    category: "work",
    categoryName: "💼 Work & Study",
    question: "Should I close some of my 78 open browser tabs?",
    verdict: "Open 22 more tabs until your computer's cooling fan sounds like a Boeing 777 preparing for takeoff.",
    worse: "Bookmark all 100 tabs into a folder named 'Crucial 2026 Stuff' and never open that folder again in your lifetime.",
    rationale: "Every tab represents an unresolved parallel dimension of yourself. Closing them is basically temporal murder.",
    confidence: 99.1,
    subtext: "RAM utilization: 104%"
  },
  {
    category: "work",
    categoryName: "💼 Work & Study",
    question: "Should I cancel my gym subscription that I haven't used in 11 months?",
    verdict: "Keep paying the fee. Consider it a monthly donation to the theoretical concept of your future muscularity.",
    worse: "Drive to the gym parking lot, eat a chocolate croissant in your car while listening to Eye of the Tiger, and drive home.",
    rationale: "Guilt burns approximately 0.003 calories per day, which accumulates to half an apple by retirement.",
    confidence: 95.8,
    subtext: "Bank statement rating: Cynical"
  },

  // --- FOOD & SNACKS ---
  {
    category: "food",
    categoryName: "🍕 Food & Snacks",
    question: "Should I cook a healthy meal or order takeout again?",
    verdict: "Eat three slices of raw American cheese directly illuminated by the open refrigerator light.",
    worse: "Construct an architectural tower using 24 tortilla chips and salsa mortar, then eat it like Godzilla.",
    rationale: "Standing in the glow of the fridge cools your core temperature while providing immediate satisfaction.",
    confidence: 97.9,
    subtext: "Chef's kiss guaranteed"
  },
  {
    category: "food",
    categoryName: "🍕 Food & Snacks",
    question: "Should I drink water or have another cup of coffee?",
    verdict: "Brew coffee using cold brew instead of water. Enter the 5th spatial dimension.",
    worse: "Eat the coffee beans dry and chase them with lukewarm faucet water like an untamed pioneer.",
    rationale: "Water is just unmotivated coffee. Give it ambition.",
    confidence: 88.6,
    subtext: "Heart rate: Yes"
  },
  {
    category: "food",
    categoryName: "🍕 Food & Snacks",
    question: "Should I cut the pizza into 4 slices or 8 slices?",
    verdict: "Don't cut it at all. Roll it into a gargantuan savory cannoli and consume it like a medieval herald.",
    worse: "Cut it in concentric circles using kitchen shears so nobody knows what slice they are eating.",
    rationale: "Euclidean geometry was invented for triangles, not melted mozzarella.",
    confidence: 99.2,
    subtext: "Italian grandmothers in shambles"
  },
  {
    category: "food",
    categoryName: "🍕 Food & Snacks",
    question: "Should I eat the last cookie in the package?",
    verdict: "Break it into two pieces. Eat one piece. Repeat infinitely until you prove Zeno's Paradox.",
    worse: "Leave exactly 1/64th of a crumb in the box so technically you didn't finish it.",
    rationale: "Quantum thermodynamics prevents you from ever eating the final particle if you halve it repeatedly.",
    confidence: 99.8,
    subtext: "Physics professors agree"
  },
  {
    category: "food",
    categoryName: "🍕 Food & Snacks",
    question: "Should I put pineapple on this pizza?",
    verdict: "Order a pizza with only pineapple chunks on raw dough. Watch the universe struggle to process your order.",
    worse: "Dip the pizza directly into warm pineapple juice and make intense eye contact with your companions.",
    rationale: "Culinary taboos exist only to be shattered by brave souls who value chaos over Italian tradition.",
    confidence: 50.1,
    subtext: "Civil war probability: 99.4%"
  },

  // --- SOCIAL & TEXTS ---
  {
    category: "social",
    categoryName: "💬 Social & Texts",
    question: "Should I reply to this text message right away?",
    verdict: "React with a thumbs-up emoji 4 days later at precisely 3:42 AM without any explanatory context.",
    worse: "Reply with 'unsubscribe' and block your best friend for exactly 25 minutes.",
    rationale: "A delayed response creates a sense of aristocratic mystery and unpredictable timing.",
    confidence: 91.2,
    subtext: "Social credit impact: Dubious"
  },
  {
    category: "social",
    categoryName: "💬 Social & Texts",
    question: "Someone waved in my direction, but I'm not sure it was for me. Should I wave back?",
    verdict: "Smoothly transition the wave into brushing imaginary lint off your forehead, then sprint in the opposite direction.",
    worse: "Wave with both arms above your head frantically like you are guiding an Airbus A380 onto a runway.",
    rationale: "The probability of mistaken wave identity is 87.3%. Evasion is your only dignified escape.",
    confidence: 97.4,
    subtext: "Awkwardness prevented: 12%"
  },
  {
    category: "social",
    categoryName: "💬 Social & Texts",
    question: "Should I pretend I'm on a phone call to avoid someone walking toward me?",
    verdict: "Hold your phone to your ear and say loudly: 'Yes Prime Minister, the pelicans have landed.'",
    worse: "Have your phone ring audibly while it's already pressed against your face.",
    rationale: "Fictional diplomacy is 100% more engaging than exchanging polite weather observations.",
    confidence: 94.6,
    subtext: "Espionage level: Novice"
  },
  {
    category: "social",
    categoryName: "💬 Social & Texts",
    question: "Should I attend this weekend's social gathering?",
    verdict: "Send a carrier pigeon bearing a wax-sealed parchment that reads: 'The stars forbid my presence.'",
    worse: "RSVP 'Yes', show up 15 minutes before the event starts, hide behind a curtain, and leave unseen.",
    rationale: "Social battery depletion is an incurable condition best treated by remaining horizontal under a duvet.",
    confidence: 94.0,
    subtext: "Introvert survival index: 10/10"
  },
  {
    category: "social",
    categoryName: "💬 Social & Texts",
    question: "Should I open the front door for the delivery courier or wait behind the blinds?",
    verdict: "Wait until their vehicle reaches the end of the block, then retrieve the package like a stealth raccoon.",
    worse: "Knock gently on the inside of the door in response to their knock, but never open it.",
    rationale: "Human contact after 6 PM resets your internal introvert calibration clock.",
    confidence: 98.9,
    subtext: "Stealth rating: Special Ops"
  },

  // --- EXISTENTIAL DREAD ---
  {
    category: "existential",
    categoryName: "🌌 Existential Dread",
    question: "What should I do with my life's grand ambition?",
    verdict: "Reorganize your sock drawer by emotional hue and declare that today's primary achievement.",
    worse: "Write a 500-page manifesto on the metaphysical superiority of round tables over square tables.",
    rationale: "Grand cosmic ambitions are overwhelming; matching navy socks with black socks is conquerable.",
    confidence: 99.6,
    subtext: "Meaning of life: Found in drawer"
  },
  {
    category: "existential",
    categoryName: "🌌 Existential Dread",
    question: "Should I stare into the middle distance for 15 minutes?",
    verdict: "Do it, but squint slightly so anyone who walks by thinks you are calculating quantum orbital mechanics.",
    worse: "Slowly whisper 'Fascinating...' every 90 seconds while staring at a completely blank beige wall.",
    rationale: "The brain requires periodic defragmentation cycles to clear cache of obsolete childhood jingles.",
    confidence: 98.2,
    subtext: "CPU idle load: 0.1%"
  },
  {
    category: "existential",
    categoryName: "🌌 Existential Dread",
    question: "Am I wasting my time right now on this website?",
    verdict: "Click the generator button at least 15 more times to thoroughly test the boundaries of human leisure.",
    worse: "Print out every single verdict on cardstock and wallpaper your living room with them.",
    rationale: "Time is a flat circle invented by Swiss watchmakers to sell ticking mechanisms to gullible bipeds.",
    confidence: 100.0,
    subtext: "Ironclad philosophical certainty"
  },
  {
    category: "existential",
    categoryName: "🌌 Existential Dread",
    question: "Should I buy that slightly expensive item I don't really need?",
    verdict: "Add it to your shopping cart, leave it there for 9 months, and check back to see if you both matured.",
    worse: "Buy two of them: one to use, and one to bury in the backyard for future archaeologists to excavate.",
    rationale: "Abandoned digital carts are the purgatory where consumerism goes to quietly reflect on its sins.",
    confidence: 92.7,
    subtext: "Bank account: Sighing in relief"
  }
];

// Fallback pool for custom dilemma generation
const CUSTOM_VERDICT_TEMPLATES = [
  "Wrap the entire issue in three layers of aluminum foil and leave it in the freezer overnight.",
  "Consult an enchanted pigeon at your local park. Accept whatever cooing sound it makes as gospel truth.",
  "Ignore it completely. If it was truly important, it would have sent you a handwritten singing telegram.",
  "Do the exact opposite of what common sense dictates while wearing sunglasses indoors.",
  "Whisper your dilemma into an empty cereal box, tape it shut, and bury it in a houseplant.",
  "Flip a coin. If it lands on heads, take a nap. If it lands on tails, take a longer nap."
];

const CUSTOM_RATIONALE_TEMPLATES = [
  "Ancient celestial cartography suggests that common sense is merely an unsubstantiated rumor.",
  "The quantum wave function collapses faster when you exhibit blatant disregard for practicality.",
  "Modern algorithms are too stressed. Injecting 100% organic confusion keeps the matrix healthy.",
  "Gravity behaves erratically whenever people try to make sensible decisions on a weekday.",
  "Thermodynamic law #4 strictly prohibits productive behavior during this astrological phase."
];

// =============================================================================
// 2. WEB AUDIO API SYNTHESIZER (Pure Vanilla Procedural Sound)
// =============================================================================

class SoundController {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.audioCtx && typeof window.AudioContext !== 'undefined') {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // Bouncy pleasant pop sound
  playPop() {
    if (this.isMuted) return;
    try {
      this.init();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  // Unhinged "Make It Worse" wobble sound
  playGlitch() {
    if (this.isMuted) return;
    try {
      this.init();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.linearRampToValueAtTime(170, now + 0.22);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  // Celebratory tiny chime
  playChime() {
    if (this.isMuted) return;
    try {
      this.init();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);

        gain.gain.setValueAtTime(0.12, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.25);
      });
    } catch (e) {}
  }
}

// =============================================================================
// 3. CONFETTI CANVAS PARTICLES (Lightweight, Self-Contained)
// =============================================================================

class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animating = false;
    this.colors = ['#6366f1', '#0ea5e9', '#f43f5e', '#f59e0b', '#10b981', '#a855f7'];

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 45) {
    if (!this.canvas) return;
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight * 0.38;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 4 + Math.random() * 8;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 3,
        size: 5 + Math.random() * 5,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        alpha: 1,
        life: 0.95 + Math.random() * 0.04
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.rotation += p.rotationSpeed;
      p.alpha *= p.life;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();

      if (p.alpha <= 0.05 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// =============================================================================
// 4. MAIN APPLICATION CONTROLLER
// =============================================================================

class PointlessApp {
  constructor() {
    this.currentCategory = 'all';
    this.currentDecision = null;
    this.isWorseMode = false;
    this.decisionCounter = 1337;
    this.history = [];
    this.previousConfidence = 90.0;

    this.sound = new SoundController();
    this.confetti = new ConfettiEngine('confetti-canvas');

    this.dom = {
      card: document.getElementById('decision-card'),
      categoryBadge: document.getElementById('category-badge'),
      counter: document.getElementById('decision-counter'),
      dilemmaText: document.getElementById('dilemma-text'),
      verdictText: document.getElementById('verdict-text'),
      rationaleText: document.getElementById('rationale-text'),
      confidencePercentage: document.getElementById('confidence-percentage'),
      confidenceSubtext: document.getElementById('confidence-subtext'),
      confidenceBar: document.getElementById('confidence-bar'),
      generateBtn: document.getElementById('generate-btn'),
      worseBtn: document.getElementById('worse-btn'),
      copyBtn: document.getElementById('copy-btn'),
      soundToggle: document.getElementById('sound-toggle'),
      themeToggle: document.getElementById('theme-toggle'),
      categoriesContainer: document.getElementById('categories-container'),
      customForm: document.getElementById('custom-dilemma-form'),
      customInput: document.getElementById('custom-input'),
      historyList: document.getElementById('history-list'),
      historyBadge: document.getElementById('history-badge'),
      clearHistoryBtn: document.getElementById('clear-history-btn'),
      toast: document.getElementById('toast'),
      toastMessage: document.getElementById('toast-message')
    };

    this.init();
  }

  init() {
    this.loadTheme();
    this.loadHistory();
    this.bindEvents();

    // Start with an initial random decision without triggering confetti
    this.generateNewDecision(false);
  }

  // Trigger spinning dice animation on the prominent button
  triggerDiceRoll() {
    const dice = this.dom.generateBtn.querySelector('.dice-icon');
    if (dice) {
      dice.classList.remove('rolling');
      void dice.offsetWidth; // Force CSS reflow
      dice.classList.add('rolling');
    }
  }

  // Smooth rolling counter animation for algorithm confidence %
  animateConfidenceCounter(targetVal) {
    const startVal = this.previousConfidence || 85.0;
    const duration = 400; // ms
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = (startVal + (targetVal - startVal) * ease).toFixed(1);

      this.dom.confidencePercentage.textContent = `${current}%`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.dom.confidencePercentage.textContent = `${targetVal.toFixed(1)}%`;
        this.previousConfidence = targetVal;
      }
    };

    requestAnimationFrame(step);
  }

  // Event bindings
  bindEvents() {
    // Prominent "Give Me a Pointless Decision" Button
    this.dom.generateBtn.addEventListener('click', () => {
      this.sound.playPop();
      this.triggerDiceRoll();
      this.generateNewDecision(true);
    });

    // Make It Worse Button
    this.dom.worseBtn.addEventListener('click', () => {
      this.sound.playGlitch();
      this.makeItWorse();
    });

    // Copy Verdict Button
    this.dom.copyBtn.addEventListener('click', () => {
      this.copyToClipboard();
    });

    // Category Filter Chips
    this.dom.categoriesContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;

      this.dom.categoriesContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      this.currentCategory = chip.dataset.category;
      this.sound.playPop();
      this.triggerDiceRoll();
      this.generateNewDecision(true);
    });

    // Custom Dilemma Form
    this.dom.customForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const question = this.dom.customInput.value.trim();
      if (!question) return;

      this.handleCustomDilemma(question);
      this.dom.customInput.value = '';
    });

    // History Clear Button
    this.dom.clearHistoryBtn.addEventListener('click', () => {
      this.clearHistory();
    });

    // Sound FX Toggle
    this.dom.soundToggle.addEventListener('click', () => {
      const muted = this.sound.toggleMute();
      this.dom.soundToggle.querySelector('.btn-icon').textContent = muted ? '🔇' : '🔊';
      this.showToast(muted ? 'Sound FX Muted' : 'Sound FX Enabled');
    });

    // Dark / Light Theme Toggle
    this.dom.themeToggle.addEventListener('click', () => {
      this.toggleTheme();
    });

    // Keyboard Accessibility & Fun: Spacebar generates a decision when not typing
    window.addEventListener('keydown', (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (e.code === 'Space' && activeTag !== 'input' && activeTag !== 'textarea') {
        e.preventDefault();
        this.sound.playPop();
        this.triggerDiceRoll();
        this.generateNewDecision(true);
      }
    });
  }

  // Filter and pick a random decision
  getAvailableDecisions() {
    if (this.currentCategory === 'all') {
      return DECISIONS_DATA;
    }
    return DECISIONS_DATA.filter(item => item.category === this.currentCategory);
  }

  // Generate a random decision
  generateNewDecision(triggerConfetti = true) {
    const list = this.getAvailableDecisions();
    if (!list.length) return;

    // Pick random item distinct from current if possible
    let item;
    if (list.length === 1) {
      item = list[0];
    } else {
      do {
        item = list[Math.floor(Math.random() * list.length)];
      } while (this.currentDecision && item.question === this.currentDecision.question);
    }

    this.currentDecision = { ...item };
    this.isWorseMode = false;
    this.decisionCounter++;

    this.renderDecision(this.currentDecision, false);
    this.saveToHistory(this.currentDecision);

    if (triggerConfetti) {
      this.confetti.burst(35);
    }
  }

  // Escalate to an even worse verdict
  makeItWorse() {
    if (!this.currentDecision) return;

    this.isWorseMode = true;
    const escalatedConfidence = Math.min(100, (parseFloat(this.currentDecision.confidence) + 1.5));
    const escalatedDecision = {
      ...this.currentDecision,
      verdict: `🚨 ESCALATION: ${this.currentDecision.worse}`,
      confidence: escalatedConfidence.toFixed(1),
      subtext: "Chaos coefficient: Unregulated"
    };

    this.renderDecision(escalatedDecision, true);
    this.showToast("Advice worsened significantly! 💥");
  }

  // Handle user's custom question
  handleCustomDilemma(userQuestion) {
    this.sound.playChime();

    // Format custom question cleanly
    let formattedQ = userQuestion;
    if (!formattedQ.endsWith('?')) formattedQ += '?';
    if (!formattedQ.startsWith('"')) formattedQ = `"${formattedQ}"`;

    const randomVerdict = CUSTOM_VERDICT_TEMPLATES[Math.floor(Math.random() * CUSTOM_VERDICT_TEMPLATES.length)];
    const randomRationale = CUSTOM_RATIONALE_TEMPLATES[Math.floor(Math.random() * CUSTOM_RATIONALE_TEMPLATES.length)];
    const randomConfidence = (85 + Math.random() * 14.9).toFixed(1);

    const customItem = {
      category: "custom",
      categoryName: "🔮 Tailored Nonsense",
      question: formattedQ,
      verdict: randomVerdict,
      worse: "Double down: Do it in public while narrating your life like a BBC nature documentary.",
      rationale: randomRationale,
      confidence: randomConfidence,
      subtext: "Personalized absurdity calculation"
    };

    this.currentDecision = customItem;
    this.isWorseMode = false;
    this.decisionCounter++;

    this.renderDecision(customItem, false);
    this.saveToHistory(customItem);
    this.confetti.burst(50);
    this.showToast("Formulated customized nonsense! ✨");

    // Scroll smoothly to the decision card
    this.dom.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Render content into the DOM with animations
  renderDecision(data, isEscalation = false) {
    // Re-trigger card pop animation
    this.dom.card.classList.remove('animate-pop');
    void this.dom.card.offsetWidth; // trigger reflow
    this.dom.card.classList.add('animate-pop');

    // Update metadata
    this.dom.categoryBadge.textContent = data.categoryName || "✨ Pointless Verdict";
    this.dom.counter.textContent = `Decision #${this.decisionCounter.toLocaleString()}`;

    // Update texts
    this.dom.dilemmaText.textContent = data.question.startsWith('"') ? data.question : `"${data.question}"`;
    this.dom.verdictText.textContent = data.verdict;
    this.dom.rationaleText.textContent = data.rationale;

    // Smooth counter animation for confidence %
    const confVal = parseFloat(data.confidence) || 90.0;
    this.animateConfidenceCounter(confVal);

    this.dom.confidenceSubtext.textContent = data.subtext || "Margin of error: ±100%";
    this.dom.confidenceBar.style.width = `${Math.min(100, Math.max(10, confVal))}%`;

    // Button states
    if (isEscalation) {
      this.dom.worseBtn.classList.add('active');
    } else {
      this.dom.worseBtn.classList.remove('active');
    }
  }

  // Copy current verdict nicely formatted to clipboard
  async copyToClipboard() {
    if (!this.currentDecision) return;

    const copyText = `🌀 POINTLESS DECISION 🌀\n\n` +
      `Dilemma: ${this.dom.dilemmaText.textContent}\n` +
      `Verdict: ${this.dom.verdictText.textContent}\n` +
      `Why it's sound: ${this.dom.rationaleText.textContent}\n` +
      `Confidence: ${this.dom.confidencePercentage.textContent} (${this.dom.confidenceSubtext.textContent})\n\n` +
      `Generated by Pointless — Overthinking life's simplest choices.`;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(copyText);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = copyText;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      this.sound.playPop();
      this.showToast("Verdict copied to clipboard! 📋");
    } catch (err) {
      this.showToast("Could not copy automatically. Select text manually.");
    }
  }

  // Display toast feedback
  showToast(message) {
    if (!this.dom.toast) return;
    this.dom.toastMessage.textContent = message;
    this.dom.toast.classList.add('show');

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.dom.toast.classList.remove('show');
    }, 2400);
  }

  // History storage & rendering
  loadHistory() {
    try {
      const saved = localStorage.getItem('pointless_history');
      if (saved) {
        this.history = JSON.parse(saved);
        this.renderHistoryList();
      }
    } catch (e) {
      this.history = [];
    }
  }

  saveToHistory(item) {
    if (!item) return;

    // Avoid duplicate adjacent items in history
    if (this.history.length && this.history[0].question === item.question) {
      return;
    }

    this.history.unshift({
      id: Date.now(),
      question: item.question,
      verdict: item.verdict,
      rationale: item.rationale,
      categoryName: item.categoryName,
      confidence: item.confidence,
      subtext: item.subtext
    });

    // Cap history at 15 items
    if (this.history.length > 15) {
      this.history.pop();
    }

    try {
      localStorage.setItem('pointless_history', JSON.stringify(this.history));
    } catch (e) {}

    this.renderHistoryList();
  }

  renderHistoryList() {
    if (!this.dom.historyList) return;

    this.dom.historyBadge.textContent = `${this.history.length} logged`;

    if (this.history.length === 0) {
      this.dom.historyList.innerHTML = `
        <div class="history-empty">
          <p>No past decisions logged yet. Start clicking the dice above to accumulate questionable wisdom!</p>
        </div>
      `;
      return;
    }

    this.dom.historyList.innerHTML = '';
    this.history.forEach((entry) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'history-item';
      itemEl.innerHTML = `
        <span class="history-dilemma">${entry.question}</span>
        <span class="history-verdict">${entry.verdict}</span>
      `;
      itemEl.addEventListener('click', () => {
        this.currentDecision = { ...entry };
        this.renderDecision(this.currentDecision, false);
        this.sound.playPop();
        this.dom.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      this.dom.historyList.appendChild(itemEl);
    });
  }

  clearHistory() {
    this.history = [];
    try {
      localStorage.removeItem('pointless_history');
    } catch (e) {}
    this.renderHistoryList();
    this.showToast("History cleared! Clean slate.");
  }

  // Theme handling
  loadTheme() {
    const savedTheme = localStorage.getItem('pointless_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.dom.themeToggle.querySelector('.btn-icon').textContent = '☀️';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this.dom.themeToggle.querySelector('.btn-icon').textContent = '🌙';
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    this.dom.themeToggle.querySelector('.btn-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('pointless_theme', newTheme);
    this.sound.playPop();
  }
}

// =============================================================================
// 5. APPLICATION BOOTSTRAP
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  window.pointlessApp = new PointlessApp();
});
