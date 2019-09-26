<template>
  <div class="background-component">
    <div class="highlight-title">How Can I Help You?</div>

    <div class="highlight-description">
      Our work then targeted, best practices outcomes social innovation synergy.
      Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
      program areas scale.
    </div>
    <div class="highlight-content">
      <highlight-card
        class="highlight-card"
        v-for="(data, index) in datas"
        :key="index"
        :title="data.title"
        :icon="data.icon"
        :description="data.description"
      ></highlight-card>
    </div>
  </div>
</template>

<script>
import HighlightCardVue from "./HighlightCard.vue";
export default {
  components: {
    "highlight-card": HighlightCardVue
  },
  data() {
    return {
      datas: [
        {
          title: "Consult",
          icon: "Icon",
          description:
            "Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress."
        },
        {
          title: "Design",
          icon: "Icon",
          description:
            "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable."
        },
        {
          title: "Develop",
          icon: "Icon",
          description:
            "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
        },
        {
          title: "Marketing",
          icon: "Icon",
          description:
            "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."
        },
        {
          title: "Manage",
          icon: "Icon",
          description:
            "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."
        },
        {
          title: "Evolve",
          icon: "Icon",
          description:
            "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer."
        }
      ]
    };
  }
};
</script>

<style scoped>
.background-component {
}
.highlight-title {
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
}

.highlight-description {
  font-weight: bold;
  font-size: 18px;
  width: 50%;
  margin: 18px 0 25px 25%;
}
.highlight-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media screen and (max-device-width: 480px) {
    .highlight-description{
        font-size: 1.2rem;
    }
}
</style>