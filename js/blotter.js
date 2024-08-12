container = document.getElementById("myName");

    let text = new Blotter.Text("JOHANN CHUA", {
      family: "'Karla', sans serif",
      weight: 300,
      size: 50,
      fill: "#fff",
      paddingLeft: 10,
      paddingTop: 0,
      paddingRight: 10,
      paddingBottom: 10,
    });

    var material = new Blotter.ChannelSplitMaterial();
    material.uniforms.uOffset.value = 0.05;
    material.uniforms.uRotation.value = 100;
    material.uniforms.uApplyBlur.value = 1;
    material.uniforms.uAnimateNoise.value = 0.1;

    var blotter = new Blotter(material, {
      texts: text
    });

    var scope = blotter.forText(text);

    scope.appendTo(container);

    // mouse movement 

    document.onmousemove = moveIt;
    function moveIt(event) {
      material.uniforms.uRotation.value = (event.clientX * 0.1);
      material.uniforms.uOffset.value = (event.clientX * 0.0001);
    }    

   // Effect Testing
  
  //   let Size = 0.001;

  //   function increaseSize () {
  //     var elem = document.getElementById("myName");
  //     var text = new Blotter.Text("JOHANN CHUA", {
  //       family: "'Inconsolata', sans serif",
  //       size: 50,
  //       fill: "#fff",
  //     });

  //     var material = new Blotter.RollingDistortMaterial();

  //     material.uniforms.uSineDistortAmplitude.value = 0.1;

  //     var blotter = new Blotter(material, {
  //       texts: text
  //     });

  //     var scope = blotter.forText(text);

  //     scope.appendTo(elem);

  //     Size += 0.001;
  //   }

  // increaseSize();

 // LIQUID DISTORTION

   // container = document.getElementById("myName");

    // let text = new Blotter.Text("JOHANN CHUA", {
    //   family: "'Inconsolata', sans serif",
    //   size: 50,
    //   fill: "#fff",
    //   paddingLeft: 10,
    //   paddingTop: 10,
    //   paddingRight: 10,
    //   paddingBottom: 10,
    // });

    // let material = new Blotter.LiquidDistortMaterial();
    // material.uniforms.uSpeed.value = 0.3;
    // material.uniforms.uVolatility.value = 0.1;
    // material.uniforms.uSeed.value = 0.1;
    
    // var blotter = new Blotter(material, {
    //   texts: text
    // });
    
    // var scope = blotter.forText(text);
    // scope.appendTo(container);
    