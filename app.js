// ========================================
// Sample Video Data
// ========================================
const sampleVideos = [
    {
        id: 1,
        title: "Epic Gaming Montage - Best Moments 2024",
        channel: "ProGamer",
        channelAvatar: "https://i.pravatar.cc/150?img=12",
        thumbnail: "gaming_thumbnail",
        views: "1.2M",
        uploadDate: "2 days ago",
        duration: "12:34",
        category: "gaming",
        likes: 45000,
        subscribers: "2.5M",
        description: "Check out the most epic gaming moments from 2024! This montage features incredible plays, clutch moments, and unforgettable victories across multiple games.",
        videoUrl: ""
    },
    {
        id: 2,
        title: "Learn JavaScript in 30 Minutes - Complete Tutorial",
        channel: "CodeMaster",
        channelAvatar: "https://i.pravatar.cc/150?img=8",
        thumbnail: "education_thumbnail",
        views: "850K",
        uploadDate: "1 week ago",
        duration: "30:15",
        category: "education",
        likes: 32000,
        subscribers: "1.8M",
        description: "A comprehensive JavaScript tutorial for beginners. Learn the fundamentals of JavaScript programming in just 30 minutes with practical examples and exercises.",
        videoUrl: ""
    },
    {
        id: 3,
        title: "Top 10 Tech Gadgets You NEED in 2024",
        channel: "TechReviewer",
        channelAvatar: "https://i.pravatar.cc/150?img=15",
        thumbnail: "tech_thumbnail",
        views: "2.1M",
        uploadDate: "3 days ago",
        duration: "15:42",
        category: "tech",
        likes: 78000,
        subscribers: "3.2M",
        description: "Discover the most innovative and useful tech gadgets of 2024. From smart home devices to cutting-edge wearables, we've got you covered!",
        videoUrl: ""
    },
    {
        id: 4,
        title: "Relaxing Piano Music for Study & Focus",
        channel: "MusicVibes",
        channelAvatar: "https://i.pravatar.cc/150?img=20",
        thumbnail: "music_thumbnail",
        views: "3.5M",
        uploadDate: "1 month ago",
        duration: "2:00:00",
        category: "music",
        likes: 125000,
        subscribers: "5.1M",
        description: "Beautiful piano music perfect for studying, working, or relaxing. Let the soothing melodies help you focus and be productive.",
        videoUrl: ""
    },
    {
        id: 5,
        title: "Champions League Highlights - Amazing Goals",
        channel: "SportsDaily",
        channelAvatar: "https://i.pravatar.cc/150?img=25",
        thumbnail: "sports_thumbnail",
        views: "1.8M",
        uploadDate: "5 hours ago",
        duration: "8:23",
        category: "sports",
        likes: 56000,
        subscribers: "4.3M",
        description: "Watch the best goals and highlights from this week's Champions League matches. Incredible skills, stunning strikes, and unforgettable moments!",
        videoUrl: ""
    },
    {
        id: 6,
        title: "The Future of AI - Documentary",
        channel: "TechDocumentaries",
        channelAvatar: "https://i.pravatar.cc/150?img=30",
        thumbnail: "tech_doc_thumbnail",
        views: "950K",
        uploadDate: "2 weeks ago",
        duration: "45:18",
        category: "tech",
        likes: 42000,
        subscribers: "2.1M",
        description: "An in-depth look at artificial intelligence and its impact on our future. Featuring interviews with leading AI researchers and industry experts.",
        videoUrl: ""
    },
    {
        id: 7,
        title: "Minecraft Survival - Building the Ultimate Base",
        channel: "MinecraftPro",
        channelAvatar: "https://i.pravatar.cc/150?img=18",
        thumbnail: "minecraft_thumbnail",
        views: "2.3M",
        uploadDate: "4 days ago",
        duration: "22:45",
        category: "gaming",
        likes: 89000,
        subscribers: "6.2M",
        description: "Join me as I build the most epic survival base in Minecraft! This mega-build features automatic farms, hidden rooms, and stunning architecture.",
        videoUrl: ""
    },
    {
        id: 8,
        title: "How to Cook the Perfect Steak - Chef's Guide",
        channel: "CulinaryArts",
        channelAvatar: "https://i.pravatar.cc/150?img=22",
        thumbnail: "cooking_thumbnail",
        views: "1.1M",
        uploadDate: "1 week ago",
        duration: "10:30",
        category: "entertainment",
        likes: 48000,
        subscribers: "1.9M",
        description: "Master the art of cooking the perfect steak with this comprehensive guide. Learn professional techniques for restaurant-quality results at home.",
        videoUrl: ""
    },
    {
        id: 9,
        title: "React.js Full Course - Build Real Projects",
        channel: "WebDevAcademy",
        channelAvatar: "https://i.pravatar.cc/150?img=10",
        thumbnail: "react_thumbnail",
        views: "680K",
        uploadDate: "3 weeks ago",
        duration: "3:15:20",
        category: "education",
        likes: 35000,
        subscribers: "1.5M",
        description: "Complete React.js course for beginners and intermediate developers. Build real-world projects and master modern web development.",
        videoUrl: ""
    },
    {
        id: 10,
        title: "Top 100 Songs of 2024 - Best Music Mix",
        channel: "MusicHits",
        channelAvatar: "https://i.pravatar.cc/150?img=28",
        thumbnail: "music_mix_thumbnail",
        views: "5.2M",
        uploadDate: "1 day ago",
        duration: "1:30:00",
        category: "music",
        likes: 198000,
        subscribers: "8.5M",
        description: "The ultimate music mix featuring the top 100 songs of 2024. Perfect playlist for any occasion - work, party, or relaxation!",
        videoUrl: ""
    },
    {
        id: 11,
        title: "NBA Playoffs - Best Dunks & Plays",
        channel: "BasketballHighlights",
        channelAvatar: "https://i.pravatar.cc/150?img=14",
        thumbnail: "nba_thumbnail",
        views: "1.4M",
        uploadDate: "12 hours ago",
        duration: "11:15",
        category: "sports",
        likes: 62000,
        subscribers: "3.8M",
        description: "Witness the most incredible dunks and plays from the NBA Playoffs. High-flying action and clutch performances from the world's best players!",
        videoUrl: ""
    },
    {
        id: 12,
        title: "Cybersecurity Basics - Protect Yourself Online",
        channel: "SecurityFirst",
        channelAvatar: "https://i.pravatar.cc/150?img=16",
        thumbnail: "security_thumbnail",
        views: "420K",
        uploadDate: "5 days ago",
        duration: "18:50",
        category: "tech",
        likes: 28000,
        subscribers: "980K",
        description: "Essential cybersecurity tips everyone should know. Learn how to protect your personal information and stay safe online in 2024.",
        videoUrl: ""
    }
];

// Sample comments data
const sampleComments = [
    {
        id: 1,
        author: "TechEnthusiast",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "This is absolutely amazing! Great content as always!",
        date: "2 hours ago",
        likes: 124
    },
    {
        id: 2,
        author: "CodingNinja",
        avatar: "https://i.pravatar.cc/150?img=2",
        text: "Thanks for sharing this. Very helpful and informative!",
        date: "5 hours ago",
        likes: 89
    },
    {
        id: 3,
        author: "MusicLover",
        avatar: "https://i.pravatar.cc/150?img=3",
        text: "I've been waiting for this! Keep up the great work!",
        date: "1 day ago",
        likes: 56
    }
];

// ========================================
// State Management
// ========================================
let currentVideo = null;
let currentFilter = 'all';
let uploadedVideos = [...sampleVideos];
let videoComments = {};

// Initialize comments for sample videos
sampleVideos.forEach(video => {
    videoComments[video.id] = [...sampleComments];
});

// ========================================
// DOM Elements
// ========================================
const elements = {
    videoGrid: document.getElementById('videoGrid'),
    uploadBtn: document.getElementById('uploadBtn'),
    uploadModal: document.getElementById('uploadModal'),
    closeUploadModal: document.getElementById('closeUploadModal'),
    selectFileBtn: document.getElementById('selectFileBtn'),
    videoFileInput: document.getElementById('videoFileInput'),
    uploadArea: document.getElementById('uploadArea'),
    uploadForm: document.getElementById('uploadForm'),
    publishVideo: document.getElementById('publishVideo'),
    cancelUpload: document.getElementById('cancelUpload'),
    videoModal: document.getElementById('videoModal'),
    closeVideoModal: document.getElementById('closeVideoModal'),
    videoPlayer: document.getElementById('videoPlayer'),
    searchInput: document.getElementById('searchInput'),
    userMenu: document.getElementById('userMenu'),
    commentInput: document.getElementById('commentInput'),
    postCommentBtn: document.getElementById('postCommentBtn'),
    commentsList: document.getElementById('commentsList')
};

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    generateThumbnails();
    renderVideos(uploadedVideos);
    setupEventListeners();
});

// ========================================
// Generate Placeholder Thumbnails
// ========================================
async function generateThumbnails() {
    const thumbnailPromises = sampleVideos.map(async (video, index) => {
        // Create a simple colored thumbnail based on category
        const colors = {
            gaming: ['#FF6B6B', '#8B5CF6'],
            music: ['#667eea', '#764ba2'],
            education: ['#f093fb', '#f5576c'],
            tech: ['#4facfe', '#00f2fe'],
            sports: ['#43e97b', '#38f9d7'],
            entertainment: ['#fa709a', '#fee140']
        };

        const gradient = colors[video.category] || colors.tech;
        video.thumbnailUrl = createGradientThumbnail(gradient, video.title);
    });

    await Promise.all(thumbnailPromises);
}

function createGradientThumbnail(colors, title) {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 360;
    const ctx = canvas.getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add play icon
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.beginPath();
    ctx.moveTo(250, 130);
    ctx.lineTo(250, 230);
    ctx.lineTo(350, 180);
    ctx.closePath();
    ctx.fill();

    return canvas.toDataURL();
}

// ========================================
// Render Videos
// ========================================
function renderVideos(videos) {
    elements.videoGrid.innerHTML = '';

    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        elements.videoGrid.appendChild(videoCard);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.videoId = video.id;

    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnailUrl}" alt="${video.title}">
            <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-info">
            <div class="video-header">
                <img src="${video.channelAvatar}" alt="${video.channel}" class="channel-avatar-small">
                <div class="video-meta">
                    <h3 class="video-card-title">${video.title}</h3>
                    <p class="video-channel">${video.channel}</p>
                    <div class="video-stats">
                        <span>${video.views} views</span> • <span>${video.uploadDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => openVideoModal(video));

    return card;
}

// ========================================
// Video Modal
// ========================================
function openVideoModal(video) {
    currentVideo = video;

    // Update modal content
    document.getElementById('modalVideoTitle').textContent = video.title;
    document.getElementById('modalVideoViews').textContent = `${video.views} views`;
    document.getElementById('modalVideoDate').textContent = video.uploadDate;
    document.getElementById('modalChannelAvatar').src = video.channelAvatar;
    document.getElementById('modalChannelName').textContent = video.channel;
    document.getElementById('modalChannelSubs').textContent = `${video.subscribers} subscribers`;
    document.getElementById('modalVideoDescription').textContent = video.description;
    document.getElementById('likeCount').textContent = formatNumber(video.likes);

    // Set video source (using placeholder for demo)
    elements.videoPlayer.src = video.videoUrl || createDemoVideo();

    // Load comments
    loadComments(video.id);

    // Show modal
    elements.videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    elements.videoModal.classList.remove('active');
    elements.videoPlayer.pause();
    elements.videoPlayer.src = '';
    document.body.style.overflow = '';
    currentVideo = null;
}

function createDemoVideo() {
    // Create a simple demo video using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');

    // Animated gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FF6B6B');
    gradient.addColorStop(1, '#8B5CF6');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Demo Video Player', canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL();
}

// ========================================
// Comments
// ========================================
function loadComments(videoId) {
    const comments = videoComments[videoId] || [];
    document.getElementById('commentCount').textContent = comments.length;

    elements.commentsList.innerHTML = '';

    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        elements.commentsList.appendChild(commentElement);
    });
}

function createCommentElement(comment) {
    const div = document.createElement('div');
    div.className = 'comment';

    div.innerHTML = `
        <img src="${comment.avatar}" alt="${comment.author}" class="comment-avatar">
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
            <div class="comment-actions">
                <button class="comment-action">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9 6V3a2 2 0 0 0-2-2L3 7v7h7.52a1.5 1.5 0 0 0 1.5-1.28l.92-6a1.5 1.5 0 0 0-1.5-1.72zM5 14H3a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 3 6h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    ${comment.likes}
                </button>
                <button class="comment-action">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7 10v3a2 2 0 0 0 2 2l4-6V2H5.48a1.5 1.5 0 0 0-1.5 1.28l-.92 6a1.5 1.5 0 0 0 1.5 1.72zM11 2h2a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 10h-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
                <button class="comment-action">Reply</button>
            </div>
        </div>
    `;

    return div;
}

function postComment() {
    if (!currentVideo || !elements.commentInput.value.trim()) return;

    const newComment = {
        id: Date.now(),
        author: "You",
        avatar: "https://i.pravatar.cc/150?img=33",
        text: elements.commentInput.value.trim(),
        date: "Just now",
        likes: 0
    };

    if (!videoComments[currentVideo.id]) {
        videoComments[currentVideo.id] = [];
    }

    videoComments[currentVideo.id].unshift(newComment);
    loadComments(currentVideo.id);
    elements.commentInput.value = '';
}

// ========================================
// Upload Functionality
// ========================================
function openUploadModal() {
    elements.uploadModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeUploadModalFunc() {
    elements.uploadModal.classList.remove('active');
    document.body.style.overflow = '';
    resetUploadForm();
}

function resetUploadForm() {
    elements.uploadArea.style.display = 'flex';
    elements.uploadForm.style.display = 'none';
    document.getElementById('videoTitle').value = '';
    document.getElementById('videoDescription').value = '';
    document.getElementById('videoCategory').value = '';
    elements.videoFileInput.value = '';
}

function handleFileSelect(file) {
    if (file && file.type.startsWith('video/')) {
        elements.uploadArea.style.display = 'none';
        elements.uploadForm.style.display = 'block';

        // Auto-fill title from filename
        const fileName = file.name.replace(/\.[^/.]+$/, "");
        document.getElementById('videoTitle').value = fileName;
    }
}

function publishVideoFunc() {
    const title = document.getElementById('videoTitle').value.trim();
    const description = document.getElementById('videoDescription').value.trim();
    const category = document.getElementById('videoCategory').value;

    if (!title || !category) {
        alert('Please fill in all required fields');
        return;
    }

    // Simulate upload progress
    const progressBar = document.getElementById('uploadProgress');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    progressBar.style.display = 'block';

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Uploading... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                addNewVideo(title, description, category);
                closeUploadModalFunc();
                alert('Video uploaded successfully!');
            }, 500);
        }
    }, 200);
}

function addNewVideo(title, description, category) {
    const newVideo = {
        id: Date.now(),
        title: title,
        channel: "Your Channel",
        channelAvatar: "https://i.pravatar.cc/150?img=33",
        thumbnail: `${category}_thumbnail`,
        views: "0",
        uploadDate: "Just now",
        duration: "0:00",
        category: category,
        likes: 0,
        subscribers: "0",
        description: description,
        videoUrl: "",
        thumbnailUrl: createGradientThumbnail(['#FF6B6B', '#8B5CF6'], title)
    };

    uploadedVideos.unshift(newVideo);
    videoComments[newVideo.id] = [];
    renderVideos(filterVideos(currentFilter));
}

// ========================================
// Search & Filter
// ========================================
function searchVideos(query) {
    const filtered = uploadedVideos.filter(video =>
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.channel.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase())
    );
    renderVideos(filtered);
}

function filterVideos(category) {
    currentFilter = category;

    if (category === 'all') {
        return uploadedVideos;
    }

    return uploadedVideos.filter(video => video.category === category);
}

// ========================================
// Event Listeners
// ========================================
function setupEventListeners() {
    // Upload modal
    elements.uploadBtn.addEventListener('click', openUploadModal);
    elements.closeUploadModal.addEventListener('click', closeUploadModalFunc);
    elements.cancelUpload.addEventListener('click', closeUploadModalFunc);

    // File selection
    elements.selectFileBtn.addEventListener('click', () => {
        elements.videoFileInput.click();
    });

    elements.videoFileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    });

    // Drag and drop
    elements.uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.uploadArea.style.borderColor = '#8B5CF6';
    });

    elements.uploadArea.addEventListener('dragleave', () => {
        elements.uploadArea.style.borderColor = '';
    });

    elements.uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        elements.uploadArea.style.borderColor = '';

        if (e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });

    // Publish video
    elements.publishVideo.addEventListener('click', publishVideoFunc);

    // Video modal
    elements.closeVideoModal.addEventListener('click', closeVideoModal);

    // Close modals on outside click
    elements.uploadModal.addEventListener('click', (e) => {
        if (e.target === elements.uploadModal) {
            closeUploadModalFunc();
        }
    });

    elements.videoModal.addEventListener('click', (e) => {
        if (e.target === elements.videoModal) {
            closeVideoModal();
        }
    });

    // Search
    let searchTimeout;
    elements.searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchVideos(e.target.value);
        }, 300);
    });

    // Category filters
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.dataset.filter;
            const filtered = filterVideos(category);
            renderVideos(filtered);
        });
    });

    // Category sidebar items
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.currentTarget.dataset.category;

            // Update filter chips
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            const matchingChip = document.querySelector(`.filter-chip[data-filter="${category}"]`);
            if (matchingChip) {
                matchingChip.classList.add('active');
            }

            const filtered = filterVideos(category);
            renderVideos(filtered);
        });
    });

    // Comments
    elements.postCommentBtn.addEventListener('click', postComment);
    elements.commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            postComment();
        }
    });

    // Video actions
    document.getElementById('likeBtn').addEventListener('click', function () {
        this.classList.toggle('active');
        if (currentVideo) {
            currentVideo.likes += this.classList.contains('active') ? 1 : -1;
            document.getElementById('likeCount').textContent = formatNumber(currentVideo.likes);
        }
    });

    document.getElementById('subscribeBtn').addEventListener('click', function () {
        const isSubscribed = this.textContent.trim() === 'Subscribe';
        this.textContent = isSubscribed ? 'Subscribed' : 'Subscribe';
        this.style.background = isSubscribed ? 'var(--bg-tertiary)' : 'var(--primary-gradient)';
    });

    document.getElementById('shareBtn').addEventListener('click', () => {
        if (navigator.share && currentVideo) {
            navigator.share({
                title: currentVideo.title,
                text: currentVideo.description,
                url: window.location.href
            });
        } else {
            alert('Share functionality - Copy link: ' + window.location.href);
        }
    });
}

// ========================================
// Utility Functions
// ========================================
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// ========================================
// Keyboard Shortcuts
// ========================================
document.addEventListener('keydown', (e) => {
    // Escape to close modals
    if (e.key === 'Escape') {
        if (elements.videoModal.classList.contains('active')) {
            closeVideoModal();
        } else if (elements.uploadModal.classList.contains('active')) {
            closeUploadModalFunc();
        }
    }

    // Space to play/pause video
    if (e.key === ' ' && elements.videoModal.classList.contains('active')) {
        e.preventDefault();
        if (elements.videoPlayer.paused) {
            elements.videoPlayer.play();
        } else {
            elements.videoPlayer.pause();
        }
    }
});
