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
      "Integrated an ONNX MediaPipe hand-landmark model into TwinCAT Machine Learning Manager for 30 Hz gesture detection and finger-spacing tracking on Beckhoff XTS linear movers.",
    highlights: [
      "Mapped ML inference outputs to PLC state logic to drive dynamic Beckhoff XTS mover behaviors, including Tractor Beam and Accordion modes.",
      "Implemented real-time position-sorting algorithms to prevent mover deadlocks and enforce collision avoidance during gesture tracking.",
      "Connected deep learning vision inference directly to industrial PLC motion logic with sub-millisecond deterministic cycle times."
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
      fps: "30 FPS Tracking",
      joints: "3 Revolute + Gripper",
      sim: "Gazebo Physics",
    },
    summary:
      "Led a 3-person team to build an end-to-end ROS2 pipeline translating webcam-tracked human arm landmarks into joint commands for a simulated robotic arm in Gazebo.",
    highlights: [
      "Implemented 30 FPS MediaPipe pose and hand tracking, computing continuous joint angles via 2D vector dot products and trigonometric mapping.",
      "Simulated a physics-enabled URDF arm with 3 revolute joints and a 2-finger gripper in Gazebo, calibrating trajectory interpolation to prevent snapping.",
      "Mapped continuous joint angles and hysteresis-debounced gesture triggers into ROS 2 JointTrajectory commands for teleoperation."
],
    link: "https://github.com/YashPanchal1012/csci-4551-final-project",
    media: [
      {
        type: "video",
        src: "Videos/Demo-video.mp4",
        poster: "images/Final Project (Thumbnail).png",
        label: "Robotic Arm ROS2 Demo",
      },
      {
        type: "document",
        src: "Documents/VORA - Final Project Report (CSCI 4551).pdf",
        label: "Technical Report (PDF)",
      },
    ],
    preview: "Videos/Demo-video.mp4",
    thumbnail: "images/Final Project (Thumbnail).png",
    mediaType: "video",
    featured: true,
  },
  {
    id: "flow-matching",
    title: "Flow-Matching Generative Models",
    category: "ml",
    categoryLabel: "Computer Vision & ML",
    tech: ["PyTorch", "Flow Matching", "U-Net", "Optimal Transport", "Heun ODE", "Gradio", "Python"],
    telemetry: {
      accuracy: "89.1% Eval Score",
      capacity: "3.91M Param U-Net",
      sampler: "50-Step Heun ODE",
    },
    summary:
      "Built continuous-time flow-matching generative models from scratch in PyTorch, scaling from 2D vector fields to a 3.91M-parameter Residual GroupNorm U-Net for MNIST and CIFAR-10 synthesis.",
    highlights: [
      "Formulated continuous-time probability paths with Optimal Transport (OT) displacement interpolation to straighten flow trajectories and accelerate convergence.",
      "Engineered a 3.91M-parameter Residual GroupNorm U-Net using 32-dim sinusoidal timestep embeddings, zero-initialized residual connections, and 50-step Heun ODE integration.",
      "Executed an 18-trial ablation study over network capacity, cosine learning rate schedules (CLR), batch size, and integration steps to reach an 89.1% classifier score.",
      "Adapted the pipeline to 3-channel CIFAR-10 image synthesis and built a Gradio web app for noise sampling and ODE trajectory visualization."
],
    link: "https://github.com/YashPanchal1012/Flow-Matching",
    liveUrl: "https://yashpanchal1012-flow-matching.hf.space/",
    media: [
      {
        type: "image",
        src: "images/cifar10_generation_animation.gif",
        label: "CIFAR-10 Flow Animation (ODE Trajectory)",
      },
      {
        type: "image",
        src: "images/flow_matching_architecture.png",
        label: "Residual GroupNorm U-Net Architecture",
      },
      {
        type: "image",
        src: "images/flow_matching_sampler.png",
        label: "Interactive Gradio Sampler & Diagnostics",
      },
      {
        type: "image",
        src: "images/flow_matching_cifar10.png",
        label: "Generated CIFAR-10 Samples (50 Heun Steps)",
      },
      {
        type: "image",
        src: "images/flow_matching_mnist_samples.png",
        label: "Final MNIST Generations (89.1% Confidence)",
      },
      {
        type: "image",
        src: "images/flow_matching_velocity_field.png",
        label: "2D Toy Flow Vector Field Dynamics",
      },
      {
        type: "document",
        src: "Documents/Flow Matching Technical Report.pdf",
        label: "Technical Report & Derivations (PDF)",
      },
    ],
    preview: "images/cifar10_generation_animation.gif",
    thumbnail: "images/cifar10_generation_animation.gif",
    mediaType: "image",
    featured: true,
  },
  {
    id: "3d-scene-reconstruction",
    title: "3D Scene Reconstruction & Gaussian Splatting",
    category: "ml",
    categoryLabel: "Computer Vision & ML",
    tech: [
      "PyCOLMAP",
      "3D Gaussian Splatting",
      "OpenCV",
      "SIFT / RANSAC",
      "SciPy (Levenberg-Marquardt)",
      "NumPy / SVD",
      "Python",
    ],
    telemetry: {
      gaussians: "190K Splats",
      reprojection: "0.34 px RMS",
      novelPSNR: "25.74 dB PSNR",
    },
    summary:
      "Engineered an end-to-end 3D reconstruction and novel view synthesis pipeline combining two-view epipolar geometry, linear SVD triangulation, PyCOLMAP Structure-from-Motion, and 3D Gaussian Splatting.",
    highlights: [
      "Calibrated camera intrinsics in PyCOLMAP and estimated relative poses (R, t) via SIFT matching, Lowe's ratio test (0.75), and 5-point RANSAC Essential matrix decomposition with cheirality checks.",
      "Formulated linear SVD triangulation, achieving 0.367 px joint RMS reprojection error on real correspondences and 1e-14 m error on synthetic verification.",
      "Refined 3D coordinates via non-linear Levenberg-Marquardt least squares, reducing joint RMS reprojection error by 7.9% to 0.338 px.",
      "Executed incremental PyCOLMAP SfM across 38 views, registering 100% of images to reconstruct 15,129 sparse 3D points from 73,146 observations (0.868 px mean error).",
      "Trained a 190,356-Gaussian Splatting model in 4.06 min on an RTX 3070 GPU, achieving 25.74 dB mean PSNR across 4 held-out novel views."
],
    link: "https://github.com/YashPanchal1012/3D-Reconstruction",
    media: [
      {
        type: "image",
        src: "images/splat_novel_view.png",
        label: "3D Gaussian Splat (Novel View Render)",
      },
      {
        type: "image",
        src: "images/splat_viewpoint_comparison.png",
        label: "Viewpoint Comparison (Training vs Novel vs Outer)",
      },
      {
        type: "image",
        src: "images/colmap_sparse_model.png",
        label: "COLMAP Sparse Multi-View Model (15,129 Points)",
      },
      {
        type: "image",
        src: "images/splat_training_progression.png",
        label: "Training Progression (1k, 5k, 10k Steps)",
      },
      {
        type: "image",
        src: "images/splat_held_out_evaluation.jpg",
        label: "Held-Out Novel View Evaluation (4 Views, 25.74 dB PSNR)",
      },
      {
        type: "image",
        src: "images/two_view_pointcloud.png",
        label: "Two-View SVD Point Cloud & Camera Geometry",
      },
      {
        type: "image",
        src: "images/triangulation_refinement_comparison.png",
        label: "SVD vs Levenberg-Marquardt Refinement",
      },
      {
        type: "image",
        src: "images/reprojection_panel.png",
        label: "Observed Keypoints vs Reprojected 3D Points",
      },
      {
        type: "document",
        src: "Documents/3D Scene Reconstruction Report (CSCI 5561).pdf",
        label: "Technical Report (PDF)",
      },
    ],
    preview: "images/splat_novel_view.png",
    thumbnail: "images/splat_novel_view.png",
    mediaType: "image",
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
      blending: "Feather Blending",
    },
    summary:
      "Built a panoramic image stitching pipeline in Python using SIFT feature matching, RANSAC homography estimation, and cylindrical blending.",
    highlights: [
      "Extracted SIFT keypoints and filtered multi-view correspondences with Lowe's ratio test (0.7 threshold).",
      "Estimated planar homographies using normalized DLT and RANSAC with adaptive confidence-based early stopping (p = 0.99).",
      "Applied bilinear warping, distance-transform feather blending, gain compensation, and cylindrical projection to assemble wide-angle panoramas."
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
      "Built a GTSRB traffic sign classifier using frozen DINOv2 vision transformer embeddings, achieving 76.6% Top-1 accuracy across 43 classes.",
    highlights: [
      "Trained a 3-layer PyTorch MLP classifier on features extracted from a frozen DINOv2 vision transformer.",
      "Benchmarked a zero-shot Qwen-VL multimodal baseline to quantify inference latency and accuracy tradeoffs.",
      "Analyzed failure modes via confusion matrices and misclassification visualizations on edge-case traffic signs."
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
      "Built a multimodal image search engine using OpenAI CLIP embeddings to index and rank local image collections against text descriptions or reference images.",
    highlights: [
      "Encoded image caches into 512-dim normalized OpenAI CLIP embeddings for cosine-similarity retrieval in under 50 ms.",
      "Built a Gradio interface supporting both natural-language text prompts and image-to-image queries.",
      "Implemented configurable top-k nearest-neighbor retrieval with per-result similarity score telemetry."
],
    link: "https://github.com/YashPanchal1012/Semantic-Image-Search",
    liveUrl: "https://yashpanchal1012-semantic-image-search.hf.space/",
    media: [
      {
        type: "video",
        src: "Videos/Semantic-Image-Search.mp4",
        poster: "images/Headshot1.jpg",
        label: "Semantic Search Demo",
      },
      {
        type: "document",
        src: "Documents/Semantic Image Search Report.pdf",
        label: "Technical Report (PDF)",
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
      "Built a full-stack recipe management web app in Django and React to search, filter, and plan meals from on-hand ingredients.",
    highlights: [
      "Integrated TheMealDB and Spoonacular REST APIs to ingest and normalize nutritional recipe data.",
      "Built a modular React SPA backed by a custom Django REST API and SQLite database for user inventory tracking.",
      "Optimized query filtering for fast local retrieval and ingredient-matching calculations."
],
    link: "https://github.com/YashPanchal1012/recipe_hub",
    liveUrl: "https://recipe-hub-virid.vercel.app/",
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
