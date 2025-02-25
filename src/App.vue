<template>
  <div class="main-container">
    <div class="floating-shapes">
      <div v-for="n in 6" :key="n" class="shape" :class="'shape-' + n"></div>
    </div>
    <div class="profile-section">
      <div class="avatar-container">
        <div class="avatar-border">
          <div class="avatar">
            <img src="https://s21.ax1x.com/2025/02/15/pEKJAwF.png" alt="头像">
          </div>
        </div>
      </div>
      <h1 class="name">YuMengJingHu</h1>
      <p class="bio">认识一下，我是鱼梦江湖</p>
      <div class="social-links">
        <a href="https://github.com/myfishdream" target="_blank" class="social-link" data-tooltip="访问我的GitHub">
          <el-icon><Platform /></el-icon>
          GitHub
        </a>
        <a href="https://blog.yumeng.icu" target="_blank" class="social-link" data-tooltip="查看我的博客">
          <el-icon><Notebook /></el-icon>
          日常笔记
        </a>
        <a href="https://github.com/myfishdream/to-dos" target="_blank" class="social-link" data-tooltip="查看示例项目">
          <el-icon><Monitor /></el-icon>
          演练实例
        </a>
      </div>
      <div class="visitor-count">
        <!-- ... -->
      </div>
    </div>
    <div class="wave-animation">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(114,137,218,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(102,186,153,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(246,173,85,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,82,82,0.2)" />
        </g>
      </svg>
    </div>
    <div class="footer">
      Copyright © 鱼梦江湖 
    </div>
  </div>
</template>

<script setup>
import { Platform, Promotion, Notebook, Monitor } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  .shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 50%;
    animation: float 15s infinite;

    &-1 {
      width: 80px;
      height: 80px;
      left: 10%;
      top: 20%;
      animation-delay: 0s;
    }

    &-2 {
      width: 60px;
      height: 60px;
      left: 80%;
      top: 60%;
      animation-delay: -2s;
    }

    &-3 {
      width: 100px;
      height: 100px;
      left: 70%;
      top: 10%;
      animation-delay: -4s;
    }

    &-4 {
      width: 50px;
      height: 50px;
      left: 30%;
      top: 70%;
      animation-delay: -6s;
    }

    &-5 {
      width: 70px;
      height: 70px;
      left: 50%;
      top: 30%;
      animation-delay: -8s;
    }

    &-6 {
      width: 90px;
      height: 90px;
      left: 20%;
      top: 50%;
      animation-delay: -10s;
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(180deg);
  }
  75% {
    transform: translateY(20px) rotate(270deg);
  }
}

.profile-section {
  padding: 4rem 2rem;
  text-align: center;
  z-index: 1;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  // background: rgba(255, 255, 255, 0.1);
  margin: 2rem;
  // box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);

  .avatar-container {
    position: relative;
    width: 240px;
    height: 240px;
    margin: 0 auto 2rem;

    .avatar-border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      padding: 10px;
      background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
      animation: rotate 10s linear infinite;

      &::before {
        content: '';
        position: absolute;
        inset: 10px;
        background: #fff;
        border-radius: 50%;
      }
    }

    .avatar {
      position: relative;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.1);
      }
    }
  }

  .name {
    font-size: 2.5rem;
    height: 50px;
    color: #2c3e50;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 5s ease infinite;
  }

  .bio {
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    .social-link {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 25px;
      color: #666;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

      &::before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 6px;
        font-size: 0.8rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        white-space: nowrap;
        margin-bottom: 5px;
      }

      &:hover {
        transform: translateY(-5px);
        background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
        color: white;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

        &::before {
          opacity: 1;
          visibility: visible;
        }

        .el-icon {
          animation: bounce 0.5s ease infinite;
        }
      }

      .el-icon {
        font-size: 1.2rem;
        transition: all 0.3s ease;
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.wave-animation {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;

  .waves {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    min-height: 50px;
    max-height: 100px;
  }

  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
  }
  .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
  .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
  .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
  .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
}

@keyframes move-forever {
  0% { transform: translate3d(-90px,0,0); }
  100% { transform: translate3d(85px,0,0); }
}

.footer {
  padding: 1rem;
  color: #666;
  font-size: 0.9rem;
  text-align: center;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  width: 100%;
}

@media (max-width: 768px) {
  .profile-section {
    padding: 2rem 1rem;
    margin: 1rem;

    .avatar-container {
      width: 180px;
      height: 180px;

      .avatar {
        width: 160px;
        height: 160px;
      }
    }

    .name {
      font-size: 2rem;
    }

    .bio {
      font-size: 1rem;
    }

    .social-links {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }

  .wave-animation {
    height: 40px;
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }

  .floating-shapes .shape {
    display: none;
  }
}
</style>
