import React from 'react';

function ValuesSection() {
  return (
    <div id="values" data-w-id="468be447-a217-5a3b-da9a-efe169e0665c" className="values-section invert-color">
      <div className="container-80 our-values-home">
        <div className="values-wrapper white">
          <div className="values-title-wrap">
            <h2 className="heading-137">Our Values</h2>
            <p className="big-p values-paragraph _2">Our Core Values are who we are. They are not just what we do, they are part of our DNA.</p>
          </div>
          <div className="values-arrow-buttons">
            <a id="slideLeftValue" href="#" className="latest-button-slide w-inline-block">
              <img src="https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/64dbd822570b6c05af5c1dce_slide-left-arrow.png" loading="lazy" alt="" />
            </a>
            <a id="slideRightValue" href="#" className="latest-button-slide w-inline-block">
              <img src="https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/64dbd82a9f1b2961d6a65815_slide-right-arrow.png" loading="lazy" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="values-hands-image-wrapper">
        <img src="https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/5f2ee075d02acc91d3b3e1f6_creation%20of%20adam%20hands.png" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 70vw, (max-width: 1410px) 100vw, 1410px" srcSet="https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/5f2ee075d02acc91d3b3e1f6_creation%20of%20adam%20hands-p-500.png 500w, https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/5f2ee075d02acc91d3b3e1f6_creation%20of%20adam%20hands-p-800.png 800w, https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/5f2ee075d02acc91d3b3e1f6_creation%20of%20adam%20hands-p-1080.png 1080w, https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/5f2ee075d02acc91d3b3e1f6_creation%20of%20adam%20hands.png 1410w" alt="" className="values-hands-image" />
      </div>
      <div className="container-100 container-values">
        <div className="drag-cursor">
          <div>DRAG</div>
        </div>
        <div id="item-scroll" className="value-group-wrapper values-home">
          <div className="value-wrapper white">
            <div className="value-header">
              <h3 className="value-heading-3">01</h3>
              <h4 className="all-caps">Jesus &nbsp;▽ &nbsp;is <br />our message</h4>
            </div>
            <div className="value-body">
              <p className="p-value">The purpose of VOUS Church is to share the hope of Jesus. Jesus is our message. We are Jesus people, not religious people. Methods will come and go, yet our message will remain the same.</p>
            </div>
          </div>
          <div className="value-wrapper white">
            <div className="value-header">
              <h3 className="value-heading-3">02</h3>
              <h4 className="all-caps">People &nbsp;▽ are our heart</h4>
            </div>
            <div className="value-body">
              <p className="p-value">Our heart is for ALL people. All people are loved by Jesus. We make no apologies for being specifically focused on reaching those far away from God. We desire to bring the broken home at all costs. We believe that our light is best seen in the night.</p>
            </div>
          </div>
          {/* Repite la estructura para los demás valores... */}
        </div>
      </div>
    </div>
  );
}

export default ValuesSection;
