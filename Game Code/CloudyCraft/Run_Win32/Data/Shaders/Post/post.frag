#version 410 core

uniform sampler2D gDiffuseTexture;
uniform sampler2D gNormalTexture; //gDepthTexture

in vec2 passUV0;

out vec4 outColor;

void main(void)
{
  outColor = texture(gDiffuseTexture, passUV0);
}
