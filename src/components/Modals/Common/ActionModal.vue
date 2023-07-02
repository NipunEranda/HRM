<template>
    <div class="modal fade" id="actionModal" tabindex="-1" aria-labelledby="actionModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="actionModalLabel">{{ modal.modalTitle }}</h5>
                    <button class="btn btn-sm ps-2 pe-2" data-bs-dismiss="modal" aria-label="Close"><font-awesome-icon
                            icon="fa-close" class="ms-1 me-1" />
                    </button>
                </div>
                <div id="modal-body" class="actionModalBody">
                    <span v-if="modal.message" id="message">{{ modal.message }}</span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="actionModalButton" @click="action(modal.data)" data-bs-dismiss="modal">{{ modal.buttonProcessName }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup: () => { },
    data() {
        return {

        }
    },
    props: {
        modal: Object,
        action: { type: Function },
    }
}
</script>