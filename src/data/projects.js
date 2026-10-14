export const portfolioProjects = [
  {
    id: "gesture-controlled-xts",
    title: "Gesture Controlled XTS System",
    category: "robotics",
    categoryLabel: "Robotics & Perception",
    tech: ["TwinCAT 3", "MediaPipe", "ONNX", "TwinCAT Vision", "C++ / PLC"],
    telemetry: {
      fps: "30 Hz Real-Time",
      accuracy: "Sub-millimeter",
      hardware: "Beckhoff XTS Mover",
    },
    summary:
      "Integrated a MediaPipe hand-landmark model in ONNX format into the TwinCAT Machine Learning Manager to execute real-time gesture detection and finger-spacing tracking for industrial linear motion.",
    highlights: [
      "Mapped ML inference outputs directly to PLC state logic for dynamic Beckhoff XTS mover behaviors such as Tractor Beam and Accordion modes.",
      "Implemented real-time position-sorting algorithms to prevent mover deadlocks and enforce collision avoidance during gesture-driven tracking.",
      "Bridged deep learning computer vision directly into industrial automation motion logic with sub-millisecond deterministic cycle times.",
    ],
    link: "https://github.com/YashPanchal1012",
    media: [
      {
        type: "video",
        src: "Videos/Vision + XTS.mp4",
        poster: "images/Vision + XTS (Thumbnail).png",
        label: "Gesture + XTS Mover Demo",
      },
      {
        type: "video",
        src: "Videos/Final Project.mp4",
        poster: "images/Final Project (Thumbnail).png",
        label: "Complete System Walkthrough",
      },
      {
        type: "video",
        src: "Videos/Vision.mp4",
        poster: "images/Vision (Thumbnail).png",
        label: "Computer Vision Tracking",
      },
    ],
    preview: "Videos/Vision + XTS.mp4",
    thumbnail: "images/Vision + XTS (Thumbnail).png",
    mediaType: "video",
    featured: true,
  },
  {
    id: "vision-robotic-arm",
    title: "Vision-Operated Robotic Arm",
    category: "robotics",
    categoryLabel: "Robotics & Perception",
    tech: ["ROS2", "MediaPipe", "Gazebo", "OpenCV", "Python", "URDF"],
    telemetry: {
      fps: "30 Hz Tracking",
      dof: "6-DOF Arm",
      sim: "Gazebo Physics",
    },
    summary:
      "Led a 3-person engineering team to build an end-to-end real-time ROS2 pipeline translating webcam-tracked human skeletal motion into responsive robotic joint commands.",
    highlights: [
      "Implemented 30 Hz MediaPipe skeletal tracking and computed inverse joint angles using 3D vector geometry.",
      "Simulated physics-enabled URDF models in Gazebo and tuned motion profiles for stable trajectory execution.",
      "Bridged real-time human movement telemetry into ROS2 control nodes for fluid robotic imitation.",
    ],
    link: "https://github.com/YashPanchal1012/csci-4551-final-project",
    media: [
      {
        type: "video",
        src: "Videos/Demo-video.mp4",
        poster: "images/Final Project (Thumbnail).png",
        label: "Robotic Arm ROS2 Demo",
      },
    ],
    preview: "Videos/Demo-video.mp4",
    thumbnail: "images/Final Project (Thumbnail).png",
    mediaType: "video",
    featured: true,
  },
  {
    id: "panoramic-image-stitching",
    title: "Panoramic Image Stitching Pipeline",
    category: "ml",
    categoryLabel: "Computer Vision & ML",
    tech: ["OpenCV", "SIFT", "RANSAC", "NumPy", "Python"],
    telemetry: {
      ratio: "Lowe's 0.7",
      confidence: "p = 0.99",
      blending: "Multi-band Feather",
    },
    summary:
      "Implemented an end-to-end computer vision pipeline for panoramic image stitching using SIFT feature matching, robust RANSAC homography estimation, and seamless cylindrical blending.",
    highlights: [
      "Detected SIFT keypoints and filtered multi-view correspondences with Lowe's ratio test (0.7 threshold).",
      "Estimated planar homographies using normalized DLT and robust RANSAC with adaptive confidence-based early stopping (p=0.99).",
      "Applied bilinear warping, distance-transform feather blending, gain compensation, and cylindrical projection to produce seamless wide-angle panoramas.",
    ],
    link: "https://github.com/YashPanchal1012/Panoramic-Image-Stitching",
    media: [
      {
        type: "image",
        src: "images/panorama_stitched.jpg",
        label: "Seamless Stitched Panorama",
      },
      {
        type: "image",
        src: "images/panorama_ransac_matches.jpg",
        label: "RANSAC Inlier Matches",
      },
      {
        type: "image",
        src: "images/panorama_cylindrical.png",
        label: "Cylindrical Projection",
      },
      {
        type: "image",
        src: "images/panorama_feather_blend.png",
        label: "Feather Blending Map",
      },
      {
        type: "image",
        src: "images/panorama_least_squares_vs_ransac.png",
        label: "Least Squares vs RANSAC",
      },
      {
        type: "document",
        src: "Documents/Panoramic Image Stitching Report.pdf",
        label: "Technical Report (PDF)",
      },
    ],
    preview: "images/panorama_stitched.jpg",
    thumbnail: "images/panorama_stitched.jpg",
    mediaType: "image",
    featured: true,
  },
  {
    id: "traffic-sign-recognition",
    title: "Traffic Sign Recognition (GTSRB)",
    category: "ml",
    categoryLabel: "Computer Vision & ML",
    tech: ["PyTorch", "DINOv2", "Qwen-VL", "Vision Transformers", "Python"],
    telemetry: {
      accuracy: "76.6% Top-1",
      classes: "43 Classes",
      backbone: "Frozen DINOv2",
    },
    summary:
      "Developed a robust GTSRB traffic sign perception pipeline achieving 76.6% accuracy across 43 classes using self-supervised foundation vision models.",
    highlights: [
      "Built a 3-layer PyTorch MLP classifier on top of a frozen DINOv2 vision transformer feature extractor.",
      "Evaluated a zero-shot Qwen-VL multimodal baseline to analyze real-time inference latency and accuracy tradeoffs.",
      "Conducted extensive error analysis and confusion matrix visualizations for edge-case traffic sign patterns.",
    ],
    link: "https://github.com/YashPanchal1012",
    media: [
      {
        type: "image",
        src: "images/MLP_misclassifcations.png",
        label: "Model Misclassifications",
      },
      {
        type: "document",
        src: "Documents/Final Project Poster - GTSRB.pdf",
        label: "Research Poster (PDF)",
      },
      {
        type: "document",
        src: "Documents/Final Project - GTSRB.pdf",
        label: "Complete Technical Report (PDF)",
      },
    ],
    preview: "images/MLP_misclassifcations.png",
    thumbnail: "images/MLP_misclassifcations.png",
    mediaType: "image",
  },
  {
    id: "semantic-image-search",
    title: "Semantic Image Search Engine",
    category: "ml",
    categoryLabel: "Computer Vision & ML",
    tech: ["PyTorch", "OpenAI CLIP", "Gradio", "Cosine Similarity", "Python"],
    telemetry: {
      embeddings: "512-dim CLIP",
      modality: "Dual Text / Image",
      latency: "< 50ms Search",
    },
    summary:
      "Built a multimodal image retrieval tool that semantically indexes and ranks local image collections against natural-language descriptions or reference images.",
    highlights: [
      "Encoded image caches with OpenAI CLIP and normalized embeddings for instantaneous cosine-similarity search.",
      "Engineered a responsive Gradio interface supporting both text query prompts and image-to-image queries.",
      "Implemented configurable top-k nearest-neighbor retrieval with similarity score telemetry.",
    ],
    link: "https://github.com/YashPanchal1012/Semantic-Image-Search",
    media: [
      {
        type: "video",
        src: "Videos/Semantic-Image-Search.mp4",
        poster: "images/Headshot1.jpg",
        label: "Semantic Search Demo",
      },
    ],
    preview: "Videos/Semantic-Image-Search.mp4",
    thumbnail: "images/Headshot1.jpg",
    mediaType: "video",
  },
  {
    id: "recipe-hub",
    title: "Recipe Hub Full-Stack Web App",
    category: "web",
    categoryLabel: "Web & Systems",
    tech: ["Django", "React", "REST API", "SQLite", "Python", "Bootstrap"],
    telemetry: {
      architecture: "Decoupled SPA",
      database: "Relational SQLite",
      api: "Spoonacular & TheMealDB",
    },
    summary:
      "Developed a full-stack recipe management web application allowing users to search, filter, and plan meals based on on-hand ingredients.",
    highlights: [
      "Integrated TheMealDB and Spoonacular external REST APIs to fetch and normalize rich nutritional recipe data.",
      "Built a modular React frontend communicating with a custom Django backend managing user inventory.",
      "Optimized query filtering for fast local retrieval and ingredient-matching calculations.",
    ],
    link: "https://github.com/YashPanchal1012/recipe_hub",
    media: [
      {
        type: "video",
        src: "Videos/recipe-hub-demo.mp4",
        poster: "images/Headshot1.jpg",
        label: "Recipe Hub Walkthrough",
      },
    ],
    preview: "Videos/recipe-hub-demo.mp4",
    thumbnail: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    mediaType: "video",
  },
];
