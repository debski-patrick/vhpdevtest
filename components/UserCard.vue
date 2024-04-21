<script setup lang="ts">
const props = defineProps(['data']);
const emits = defineEmits(['change', 'delete']);
const {
  id,
  firstname,
  lastname,
  age,
  address,
  phone,
  email,
  date,
  usertype,
} = props.data;

function editMode() {
  emits('change', props.data);
}

function deleteMode() {
  emits('delete', props.data);
}
</script>

<template>
  <div class="tw-flex tw-flex-col tw-p-4 tw-bg-white tw-mb-4 tw-rounded-xl tw-shadow-2xl tw-shadow-gray-200">
    <div class="tw-flex tw-justify-between tw-w-full">
      <div class="tw-w-full">
        <h1 class="tw-font-bold tw-text-sm">
          {{ `${firstname} ${lastname}` }}
          <VChip
            color="primary"
            variant="flat"
            size="x-small"
          >
            {{ usertype }}
          </VChip>
        </h1>
        <p class="tw-text-xs">
          {{ address }}
        </p>
      </div>
      <div class="tw-flex">
        <VBtn
          density="default"
          icon="mdi-pencil"
          variant="text"
          size="x-small"
          @click="editMode"
        />
        <VBtn
          density="default"
          icon="mdi-delete"
          variant="text"
          size="x-small"
          @click="deleteMode"
        />
      </div>
    </div>

    <div class="tw-flex tw-items-center tw-w-full tw-mt-4 tw-text-sm">
      <p class="tw-text-xs tw-mr-2">
        <VIcon icon="mdi-phone" />{{ phone }}
      </p>
      <p class="tw-text-xs tw-mr-2">
        <VIcon icon="mdi-calendar" />{{ `${date.toLocaleDateString()} (Age: ${age})` }}
      </p>
      <p class="tw-text-xs tw-mr-2">
        <VIcon icon="mdi-email" />{{ email }}
      </p>
    </div>
  </div>
</template>
